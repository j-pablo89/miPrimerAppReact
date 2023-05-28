const Titulos = (props) => {
    return (
        <section className="text-center my-5">
            <h1 className="display-4">Primera web con react</h1>
            <h2 className="display-5">{props.nuevoTitulo}</h2>
        </section>
    );
};

export default Titulos;