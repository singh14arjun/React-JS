import { useState } from "react";

const EMICalculator = () => {


    var maxLoanAmount = 5000000;
    var minLoanAmount = 10000;

    const [loanAmount, setLoanAmount] = useState(minLoanAmount);
    const [loanAmountMsg, setLoanAmountMsg] = useState("");

    var maxInterestRate = 25;
    var minInterestRate = 1;

    const [interestRate, setInterestRate] = useState(minInterestRate);
    const [interestRateMsg, setInterestRateMsg] = useState("");

    var maxTenure = 30;
    var minTenure = 1;

    const [tenure, setTenure] = useState(minTenure);
    const [tenureMsg, setTenureMsg] = useState("");

    function handleLoadAmount(e) {
        const value = Number(e.target.value);
        setLoanAmount(value);

        if (value < minLoanAmount) {
            setLoanAmountMsg("Loan Amount should be greater than or equal to " + minLoanAmount);
        }
        else if (value > maxLoanAmount) {
            setLoanAmountMsg("Loan Amount should be less than or equal to " + maxLoanAmount);
        }
        else {
            setLoanAmountMsg("");
        }

    }

    function handleInterestRate(e) {
        const value = Number(e.target.value);
        setInterestRate(value);

        if (value < minInterestRate) {
            setInterestRateMsg("Interest Rate should be greater than or equal to " + minInterestRate);
        }
        else if (value > maxInterestRate) {
            setInterestRateMsg("Interest Rate should be less than or equal to " + maxInterestRate);
        }
        else {
            setInterestRateMsg("");
        }

    }

    function handleTenure(e) {
        const value = Number(e.target.value);
        setTenure(value);

        if (value < minTenure) {
            setTenureMsg("Tenure should be greater than or equal to " + minTenure);
        }
        else if (value > maxTenure) {
            setTenureMsg("Tenure should be less than or equal to " + maxTenure);
        }
        else {
            setTenureMsg("");
        }

    }

    const calculateEMI = () => {
        const monthlyRate = interestRate / (12 * 100); // Monthly interest rate
        const numberOfMonths = tenure * 12;

        if (monthlyRate === 0) {
            return loanAmount / numberOfMonths;
        }

        const emi =
            (loanAmount *
                monthlyRate *
                Math.pow(1 + monthlyRate, numberOfMonths)) /
            (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

        return emi;
    };

    const monthlyEMI = calculateEMI();

    const totalPayableAmount = monthlyEMI * tenure * 12;

    const totalInterest = totalPayableAmount - loanAmount;

    const principal = loanAmount;

    return (
        <div >
            <header className="bg-gray-200 p-10 m-10 rounded-xl">
                <h1 className="text-4xl font-bold">EMI Calculator</h1>
                <p className="text-gray-600">Plan your finances with precision. Estimate your monthly loan payments effortlessly and visualize your financial future with clarity.</p>

            </header>

            <main className="p-10 m-10 rounded-xl bg-gray-200">

                <div>
                    <div>
                        <div className="flex justify-between">

                            <label htmlFor="" className="font-semibold text-xl">Loan Amount</label>
                            <input type="number"
                                value={loanAmount} onChange={handleLoadAmount}
                                className={`rounded-md px-2 py-2 w-30 bg-gray-300 border font-semibold`} />
                        </div>
                        <p className="text-red-500">{loanAmountMsg}</p>
                    </div>
                    <div className="my-4">
                        <input
                            type="range"
                            min={minLoanAmount}
                            max={maxLoanAmount}
                            value={loanAmount}
                            onChange={handleLoadAmount}
                            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className={`text-gray-900 font-semibold`}>{minLoanAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
                        <p className={`text-gray-900 font-semibold`}>{maxLoanAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
                    </div>
                </div>
                <div className="pt-10">
                    <div>
                        <div className="flex justify-between">

                            <label htmlFor="" className="font-semibold text-xl">Interest Rate % (p.a)</label>
                            <input type="number" placeholder="number" value={interestRate} onChange={handleInterestRate} className="border rounded-md px-2 py-2 w-30 bg-gray-300 font-semibold" />
                        </div>
                        <p className="text-red-500">{interestRateMsg}</p>
                    </div>
                    <div className="my-4">
                        <input
                            type="range"
                            min={minInterestRate}
                            max={maxInterestRate}
                            value={interestRate}
                            onChange={handleInterestRate}
                            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className={`text-gray-900 font-semibold`}>{minInterestRate}%</p>
                        <p className={`text-gray-900 font-semibold`}>{maxInterestRate}%</p>
                    </div>
                </div>
                <div className="pt-10">
                    <div>
                        <div className="flex justify-between">

                            <label htmlFor="" className="font-semibold text-xl">Loan Tenure (years)</label>
                            <input type="number" placeholder="number" value={tenure} onChange={handleTenure}
                                className={`rounded-md px-2 py-2 w-30 bg-gray-300 border font-semibold`} />
                        </div>
                        <p className="text-red-500">{tenureMsg}</p>
                    </div>
                    <div className="my-4">
                        <input
                            type="range"
                            min={minTenure}
                            max={maxTenure}
                            value={tenure}
                            onChange={handleTenure}
                            className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                        />
                    </div>
                    <div className="flex justify-between">
                        <p className={`text-gray-900 font-semibold`}>{minTenure} years</p>
                        <p className={`text-gray-900 font-semibold`}>{maxTenure} years</p>
                    </div>
                </div>


                <button onClick={calculateEMI} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">Calculate EMI</button>


            </main>
            <div className="bg-gray-700 p-10 rounded-xl m-10 text-white">

                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <p className="text-gray-300">Principal Amount</p>
                        <h2 className="text-3xl font-bold text-blue-400">
                            {principal.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                            })}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-300">Monthly EMI</p>
                        <h2 className="text-3xl font-bold text-green-400">
                            {monthlyEMI.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                            })}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-300">Total Interest</p>
                        <h2 className="text-3xl font-bold text-yellow-400">
                            {totalInterest.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                            })}
                        </h2>
                    </div>

                    <div>
                        <p className="text-gray-300">Total Payable Amount</p>
                        <h2 className="text-3xl font-bold text-pink-400">
                            {totalPayableAmount.toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                            })}
                        </h2>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default EMICalculator