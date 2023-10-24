

export default function ItemCard({item}) {
    return (
        <div className="mx-4 my-6 px-3 py-3 bg-orange-300 rounded-2xl shadow-xl hover:bg-orange-400 hover:shadow-2xl">
            <h3 className="px-3 py-1 text-2xl font-semibold bg-orange-100 rounded-xl">{item.name}</h3>
            <p className="px-3 py-1 pt-3 text-lg"><b>Quantity: </b> {item.quantity} </p>
            <p className="px-3 py-1 text-lg"><b>Category: </b> {item.category} </p>
        </div>
    );
}