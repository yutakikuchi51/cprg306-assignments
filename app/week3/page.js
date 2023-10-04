import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-white">
            <h1 className="mx-4 pt-4 text-5xl font-bold text-orange-300 drop-shadow-xl">Shopping List</h1>
            <ItemList />
        </main>
    );
}