import React, { useEffect, useState } from "react";

export default function AdminContacts(){
    const  [ contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/contact`,{
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token"),
            },
        })
        .then((res) => res.json())
        .then((data) => setContacts(data))
    },[]);
    const deleteContact = async (id) => {
        await fetch(`http://localhost:5000/api/contact/delete/${id}`,{
            method: "PUT",
        });
        setContacts(contacts.filter((c) => c._id !== id));
    };
    return(
        <div className="p-0">
            <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
            {contacts.map((c) => (
                <div
                    key={c._id}
                    className="border p-4 mb-4 rounded-lg shadow"
                >
                    <h3 className="font-semibold">{c.name}</h3>
                    <p>{c.email}</p>
                    <p className="mt-2 text-gray-600">{c.message}</p>
                    <button onClick={() => deleteContact(c._id)}>Delete</button>
                </div>
                
            ))}
            

        </div>
    )
}