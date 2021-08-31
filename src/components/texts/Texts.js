import Button from "../button/Button";
import './Texts.css'

function Texts() {

    return(
        <>
        <div id="text-container">
            <div className="text-wrapper">
                <h2>Emergence of Scaling in Random Networks</h2>
                <p className="data">A.-L. Barabási, R.Albert / Science 286, 509-512 (1999)</p>
                <p className="text">Systems as diverse as genetic networks or the World Wide Web are best described as networks with complex topology. A common property of many large networks is that the vertex connectivities follow a scale-free power-law distribution. This feature was found to be a consequence of two generic mechanisms: (i) networks expand continuously by the addition of new vertices, and (ii) new vertices attach preferentially to sites that are already well connected. A model based on these two ingredients reproduces the observed stationary scale-free distributions, which indicates that the development of large networks is governed by robust self-organizing phenomena that go beyond the particulars of the individual systems.</p>
                <Button/>
            </div>
            <div className="text-wrapper">
                <h2>Statistical mechanics of complex networks</h2>
                <p className="data">A.-L. Barabási, R.Albert / Reviews of Modern Physics 74 47-97 (2002)</p>
                <p className="text">Complex networks describe a wide range of systems in nature and society. Frequently cited examples include the cell, a network of chemicals linked by chemical reactions, and the Internet, a network of routers and computers connected by physical links. While traditionally these systems have been modeled as random graphs, it is increasingly recognized that the topology and evolution of real networks are governed by robust organizing principles. This article reviews the recent advances in the field of complex networks, focusing on the statistical mechanics of network topology and dynamics. After reviewing the empirical data that motivated the recent interest in networks, the authors discuss the main models and analytical tools, covering random graphs, small-world and scale-free networks, the emerging theory of evolving networks, and the interplay between topology and the network’s robustness against failures and attacks.</p>
                <Button/>
            </div>
        </div>
        </>
    )
}

export default Texts