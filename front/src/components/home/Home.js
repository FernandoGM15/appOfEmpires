const Home = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center" style={{ height: "15vh", backgroundColor: "#003456", backgroundImage: "url(https://www.ageofempires.com/wp-content/themes/ageOfEmpires/dist/images/ui/textile-60c.webp)" }}>
                    <div className="col-md-1">
                        <i class="fa-solid fa-tags" style={{ height: "5em", color: "#F4D284" }}></i>
                    </div>
                    <div className="col-md-5">
                        <h5>
                            A Wololo hoodie? Sheep PJ's? An Idle Villager mug?
                            Complete your Age of Empires Collection with some
                            awesome new merch - <a href="https://www.insertcoinclothing.com/age-of-empires/" target={"_blank"}>NOW LIVE!</a>
                        </h5>
                    </div>
                </div>
            </div>
            <img src="https://images5.alphacoders.com/117/1172591.png" style={{ height: "77vh", width: "100%" }} />
        </div>


    )
}

export default Home;