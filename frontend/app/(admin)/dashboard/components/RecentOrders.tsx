"use client"
import { Trash, Edit2, X, Check } from "lucide-react"
import { useEffect, useState } from "react"
interface Order {
  ID: number;
  OrderNumber: string;
  TotalPrice: number;
  OrderStatus: string;
  User: {
    Name: string;
  };
  OrderItems: {
    Product: {
      name: string;
    };
  }[];
}
const RecentOrders = () => {
    const [order,setOrders] = useState<Order[]>([])
    const [editingId, setEditingId] = useState<number | null>(null)
    const [editStatus, setEditStatus] = useState("")

    const fetchOrder = async () => {
      const token = localStorage.getItem("token")
      const response = await fetch("http://localhost:8080/api/v1/order", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data.data);
      setOrders(data.data || []);
    };

    useEffect(() => {
      fetchOrder();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you sure you want to delete this order?")) return;
        const token = localStorage.getItem("token")
        try {
            const data = await fetch(`http://localhost:8080/api/v1/order/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            if (data.ok) {
                fetchOrder()
            } else {
                alert("Failed to delete order")
            }
        } catch (error) {
            console.log(error)
            alert("Error deleting order")
        }
    }

    const handleUpdate = async (id: number) => {
        const token = localStorage.getItem("token")
        try {
            const data = await fetch(`http://localhost:8080/api/v1/order/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    order_status: editStatus
                })
            })
            if (data.ok) {
                setEditingId(null)
                fetchOrder()
            } else {
                alert("Failed to update order")
            }
        } catch (error) {
            console.log(error)
            alert("Error updating order")
        }
    }

    const startEditing = (item: Order) => {
        setEditingId(item.ID)
        setEditStatus(item.OrderStatus)
    }
    return (
        <>
            <section className="mt-stack-lg bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden">
                <div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center">
                    <h3 className="font-headline-sm text-headline-sm text-primary">Recent Orders</h3>
                    <button className="text-primary font-label-md hover:underline">View All Orders</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Product</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-label-md font-bold text-secondary uppercase tracking-wider text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant">
                            {order.map((item, index) => (
                                <tr key={index} className="hover:bg-surface-container transition-colors">
                                    <td className="px-6 py-4 text-body-sm font-semibold text-primary">{item.OrderNumber}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-[10px]">
                                                {item.User?.Name?.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-body-sm font-medium text-primary">{item.User?.Name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-body-sm text-secondary">
                                        {item.OrderItems?.[0]?.Product?.name || "Unknown Product"}
                                    </td>
                                    <td className="px-6 py-4 text-body-sm font-bold text-primary">
                                        $ {item.TotalPrice?.toLocaleString("id-ID")}
                                    </td>
                                    <td className="px-6 py-4">
                                        {editingId === item.ID ? (
                                            <select 
                                                value={editStatus} 
                                                onChange={(e) => setEditStatus(e.target.value)}
                                                className="border rounded px-2 py-1 font-body-sm outline-none focus:ring-1 focus:ring-primary"
                                            >
                                                <option value="pending">pending</option>
                                                <option value="paid">paid</option>
                                                <option value="shipped">shipped</option>
                                                <option value="completed">completed</option>
                                                <option value="cancelled">cancelled</option>
                                            </select>
                                        ) : (
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.OrderStatus === "paid" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
                                                {item.OrderStatus}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {editingId === item.ID ? (
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => handleUpdate(item.ID)} className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-all" title="Save">
                                                    <Check size={18} />
                                                </button>
                                                <button onClick={() => setEditingId(null)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all" title="Cancel">
                                                    <X size={18} />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="flex justify-end gap-2">
                                                <button onClick={() => startEditing(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-all" title="Edit">
                                                    <Edit2 size={18} />
                                                </button>
                                                <button onClick={() => handleDelete(item.ID)} className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-all" title="Delete">
                                                    <Trash size={18} />
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
export default RecentOrders