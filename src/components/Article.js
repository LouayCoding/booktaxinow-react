function Article(props) {
    return (
        <section data-bs-version="5.1" className={`header1 cid-tv1tbYTySN mbr-fullscreen mbr-parallax-background ${props.class}`} id="aheader1-1n">
            <div className="mbr-overlay" style={{ opacity: '0.7', backgroundColor: 'rgb(0, 0, 0)' }}>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-8">
                        <h3 className="mbr-section-title mbr-fonts-style align-center display-2"><br /><br /><strong>{props.title}</strong></h3>
                        <h4 className="mbr-section-subtitle align-center mbr-fonts-style display-7">{props.text}</h4>
                        <div className="mbr-section-btn align-center"><a className="btn btn-danger display-7" href={'/contact'}><span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />Boek Taxi</a> <a className="btn btn-white display-7" href={'/contact'}><span className="mobi-mbri mobi-mbri-right mbr-iconfont mbr-iconfont-btn" />Contact</a></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Article;