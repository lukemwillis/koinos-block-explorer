import { Signer, Contract, Provider, Serializer, utils } from "koilib";
import { useEffect, useState } from "react";

function BlockExplorer() {
    const [blocks, setBlocks] = useState([]);
    useEffect(() => {
        const provider = new Provider(["http://localhost:8081"]);
        provider.getBlocks(1,1)
            .then((res) => setBlocks(res))
            .catch((err) => window.alert(err));
    }, []);

    return (
        <div>
            {blocks}
        </div>
    );
}

export default BlockExplorer;