export default function Item({name, quantity, category}) {
    return (
        <div>
            <ul className="mx-4 my-6 px-3 py-3 bg-orange-300 rounded-2xl shadow-xl hover:bg-orange-400 hover:shadow-2xl">
                <li className="px-3 py-1 text-2xl font-semibold bg-orange-100 rounded-xl">{name}</li>
                <li className="px-3 py-1 pt-3 text-lg">Quantity: {quantity}</li>
                <li className="px-3 py-1 text-lg">Category: {category}</li>
            </ul>
        </div>
    )
}