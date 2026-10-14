function Array() {
    const daftarbuah = ["Apel", "Mangga", "Pisang"];
    return (
        <ul>
            {daftarbuah.map((buah, index) => (<li key={index}>{buah}</li>))}
        </ul>
    );
}
export default Array;