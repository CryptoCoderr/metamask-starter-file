document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("accountList")
        .addEventListener("click", changeAccount);


    document
        .getElementById("userAddress")
        .addEventListener("click", copyAddress);

    document
        .getElementById("transferFund")
        .addEventListener("click", handler);
    
   
       document
        .getElementById("header_network")
        .addEventListener("click", getOpenNetwork);
    
       document
        .getElementById("network_item")
        .addEventListener("click", getSelectedNetwork);
    
       document
        .getElementById("add_network")
        .addEventListener("click", setNetwork);
    
       document
        .getElementById("loginAccount")
        .addEventListener("click", loginUser);
    
       document
        .getElementById("accountCreate")
        .addEventListener("click", createUser);
    
       document
        .getElementById("openCreate")
        .addEventListener("click", openCreate);
    
       document
        .getElementById("sign_up")
        .addEventListener("click", signUp);
    
    
       document
        .getElementById("login_up")
        .addEventListener("click", login);
    
    
       document
        .getElementById("logout")
        .addEventListener("click", logout);
    
    
       document
        .getElementById("open_Transfer")
        .addEventListener("click", openTransfer);
    
    
       document
        .getElementById("goBack")
        .addEventListener("click", goBack);
    
    
       document
        .getElementById("open_Import")
        .addEventListener("click", openImport);
    
    
       document
        .getElementById("open_assets")
        .addEventListener("click", openAssets);
    
    
       document
        .getElementById("open_activity")
        .addEventListener("click", openActivity);
    
    
       document
        .getElementById("goHomePage")
        .addEventListener("click", goHomePage);
    
       document
        .getElementById("openAccountImport")
        .addEventListener("click", openImportModel);
    
           document
        .getElementById("close_import_account")
        .addEventListener("click", closeImportModel);
    
    
       document
        .getElementById("add_new_token")
        .addEventListener("click", addToken);
    
    
       document
        .getElementById("add_New_Account")
        .addEventListener("click", addAccount);
    
     


});

//STATE VARIABLE
let provideURL = "https://polygon-mumbai.g.alchemy.com/v2/Lpv_opH7RChY44W-2O3qyeF4OaLJNSRW";

let provider;
let privateKey;
let address;

//FUNCTION
function handler() {
    document.getElementById("transfer_center")?.style.display = "flex";

    const amount = doucment.getElementById("amount").value;
    const address = document.getElementById("address").value;

    const private_key = "a032afa821d971840e0792d896bf15d5c752d1a3c1a84b4446b019d21a3ccf41"
    const testAccount = "0xBB768deC046f2bf39D3e6a30bA30E7d9288027B1";

    //PROVIDER
    const provider = new ethers.providers.JsonRpcProvider(providerURL);
    let wallet = new ethers.Wallet(privateKey, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };
    let a = document.getElementById("link");
    a.href = "somelink url";
    wallet.sendTransaction(tx).then((txObj) => {
        console.log("txHash:", txObj.hash);
        document.getElementById("transfer_center").style.display = "none";
        const a = document.getElementById("link");
    })
}

function checkBlance() {}

function getOpenNetwork() { }

function getSelectedNetwork() { }

function setNetwork() { }

function loginUser() { }

function createUser() { }

function openCreate() { }

function signUp() { }

function login() { }

function logout() { }

function openTransfer() { }

function goBack() { }

function openImport() { }

function importGoBack() { }

function openActivity() { }

function openAssets() { }

function goHomePage() { }

function openImportModel() { }

function closeImportModel() { }

function addToken() { }

function addAccount() { }

function myFunction() { }

function copyAddress() { }

function changeAccount() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }

function openCreate() { }
