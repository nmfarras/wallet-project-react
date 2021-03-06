import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import "./WalletPage.css";
import WalletDetail from "../../components/WalletDetail/WalletDetail.component";
// import DisplayTransaction from "../../components/DisplayTransaction/DisplayTransaction.component";

const WalletPage = () => {
    const [selects, setSelects] = useState(0);
    const [selectWallets, setSelectWallets] = useState(0);
    const [customer, setCustomer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    function onSelected(props) {
        setSelects(props.target.value)
    }



    function onSelectedWallet(props) {
        setSelectWallets(props.target.value)
    }

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:8080/customers')

        // .catch((error)=>{
        //     console.log(error);
        // })
        setCustomer(data);
        setIsLoading(false);
        console.log(data);
    }
    useEffect(() => {
        fetchData();

    }, [])


    return (
        <div className="wallet">
            <h1>Wallet</h1>
            {/* <select id="dropdown" value={selects} onChange={onSelected}>
                <option value="0">user 1</option>
                <option value="1">user 2</option>
                <option value="2">user 3</option>
            </select> */}

            {/* <WalletDetail data={customer[parseInt(selects)]} isLoading = {isLoading} /> */}
            <WalletDetail
                data={customer}
                isLoading={isLoading}
                selects={selects}
                onSelected={onSelected}
                selectWallets={selectWallets}
                onSelectedWallet={onSelectedWallet}
            />

        </div>
    )
}

export default WalletPage;