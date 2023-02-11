import Places from "./Places";
console.log(Places)


export default function Prices() {
    return (
        <section
            data-bs-version="5.1"
            className="table01 photom4_table01 section-table cid-tv1EZuIHbb"
            id="table01-21"
        >
            <br />
            <br />
            <br />
            <br />
            <br />
            <div
                className="mbr-overlay"
                style={{ opacity: "0.6", backgroundColor: "rgb(0, 0, 0)" }}
            ></div>
            <div className="container-fluid">
                <div className="row align-center">
                    <div className="col-12 col-md-12">
                        <h2 className="mbr-section-title mbr-fonts-style mbr-black display-5">
                            <strong>Fixed prices naar en vanaf Schiphol Airport</strong>
                        </h2>
                        <h3 className="mbr-section-subtitle mbr-light mbr-fonts-style pb-3 pt-2 display-7">
                            Indien uw stad niet op de lijst staat, aarzel niet om telefonisch
                            contact op te nemen met onze centrale om de fixed price voor uw
                            taxirit op te vragen. Wij staan altijd klaar om u verder te helpen.
                        </h3>
                        <div className="table-wrapper" style={{ width: "60%" }}>
                            <div className="container-fluid"></div>
                            <div className="container-fluid scroll">
                                <table className="table table-striped" cellSpacing={0}>
                                    <thead>
                                        <tr className="table-heads">
                                            <th className="head-item mbr-fonts-style display-4">
                                                Plaats
                                            </th>
                                            <th className="head-item mbr-fonts-style display-4">
                                                1/4 personen
                                            </th>
                                            <th className="head-item mbr-fonts-style display-4">
                                                5/8 personen
                                            </th>
                                        </tr>
                                    </thead>
                                    <List></List>
                                </table>
                            </div>
                            <div className="container-fluid table-info-container"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}


const List = () => {
    return (
        <tbody>
            {Places.map((place, index) => (
                <tr key={index}>
                <td className="body-item mbr-fonts-style display-7">{place.place}</td>
                <td className="body-item mbr-fonts-style display-7">€{place.min}</td>
                <td className="body-item mbr-fonts-style display-7">€{place.max}</td>
              </tr>
            ))}
        </tbody>
    );
};