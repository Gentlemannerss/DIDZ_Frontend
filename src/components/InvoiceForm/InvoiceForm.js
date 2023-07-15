import React, {useState, useContext, useEffect} from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

function InvoiceForm() {
    const [address, setAddress] = useState("");
    const [amountOfParticipants, setAmountOfParticipants] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [invoiceAddress, setInvoiceAddress] = useState("");
    const [frequency, setfrequency] = useState("");
    const [termsOfCondition, setTermsOfCondition] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [comments, setComments] = useState("");
    const [products, setProducts] = useState([]);
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");

    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        try {
            const response = await axios.get("http://localhost:8080/products");
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const invoiceFormData = {
            invoice : {
            address: address,
            amountOfParticipants: amountOfParticipants,
            productsId: [selectedProduct],
            invoiceAddress: invoiceAddress,
            frequency: frequency,
            termsOfCondition: termsOfCondition,
            companyName: companyName,
            comments : comments,
            },
            user : {
                username: username,
                email: email,
                password: password,
                fullName: fullName,
            },
            userId : localStorage.getItem("userId"),
        };

        if (isAuth.isAuth) {
            try {
                const response = await axios.post("http://localhost:8080/invoices/existing-user",
                    invoiceFormData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        }
                    }
                );

                console.log("Invoice data submitted for existing user:", response.data);

            } catch (error) {
                // Handle error
                console.error(error);
                // Display an error message to the user or handle the error in an appropriate way
            }
        } else {
            // User is not logged in, use the endpoint for new users
            try {
                const response = await axios.post(
                    "http://localhost:8080/invoices/new-user",
                    invoiceFormData

                );
                // Handle the response
                console.log("Invoice data submitted for new user:", response.data);
                // Perform any additional actions based on the response, such as updating the UI
            } catch (error) {
                // Handle error
                console.error(error);
                // Display an error message to the user or handle the error in an appropriate way
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Invoice Details</legend>

                <label htmlFor="address">
                    Address:
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        placeholder={"Enter your address"}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="amount-of-participants">
                    Amount of Participants:
                    <input
                        type="number"
                        name="amountOfParticipants"
                        id="amount-of-participants"
                        value={amountOfParticipants}
                        onChange={(e) => setAmountOfParticipants(parseInt(e.target.value))}
                    />
                </label>
                <br />
                <label htmlFor="products">
                    Products:
                    <select
                        name="products"
                        id="products"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                    >
                        <option value="">Select a product</option>
                        {products.map((product) => (
                            <option key={product.productId} value={product.productId}>
                                {product.productName}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label htmlFor="invoice-address">
                    Invoice Address:
                    <input
                        type="text"
                        name="invoiceAddress"
                        id="invoice-address"
                        value={invoiceAddress}
                        placeholder={"Enter your invoice address"}
                        onChange={(e) => setInvoiceAddress(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="frequency-of-sessions">
                    Frequency of Sessions (optional):
                    <input
                        type="text"
                        name="frequencyOfSessions"
                        id="frequency-of-sessions"
                        value={frequency}
                        placeholder={"Enter the frequency of sessions you want"}
                        onChange={(e) => setfrequency(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="company-name">
                    Company Name:
                    <input
                        type="text"
                        name="companyName"
                        id="company-name"
                        value={companyName}
                        placeholder={"Enter your company name"}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="terms-of-condition">
                    <input
                        type="checkbox"
                        name="termsOfCondition"
                        checked={termsOfCondition}
                        onChange={() => setTermsOfCondition(!termsOfCondition)}
                    />
                    Agree to Terms of Condition
                </label>
            </fieldset>

            <label htmlFor="description">
                Please leave you're comments here:<br />
                <textarea
                    name="comments"
                    id="comments"
                    rows="4"
                    cols="73"
                    placeholder="Enter the comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                ></textarea>
            </label>

            {!isAuth.isAuth &&
            <fieldset>
                <legend>Account Information</legend>

                <label htmlFor="username">
                    Name:
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        placeholder={"Enter your username"}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="fullName">
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={fullName}
                        placeholder={"Enter your full name"}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder={"Enter your email"}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        placeholder={"Enter your password"}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </fieldset>
            }

            <button type="submit">Submit</button>
        </form>
    );
}

export default InvoiceForm;