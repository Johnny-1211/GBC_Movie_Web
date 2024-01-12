// define const
const pricePerTicket1 = 30
const pricePerTicket2 = 80
const tax = 0.13

// define global variable
// user input
var ticketType
var quantityOfTicket
var creditCardInformation
// output
var pricePerTicket
var subTotal
var taxFee
var finalPrice


const showSummary = () => {
    // 1. Retrieval user input
    ticketType = Number(document.getElementById("ticket-type").value)
    quantityOfTicket = Number(document.getElementById("quantity-of-ticket").value)
    creditCardInformation = String(document.getElementById("credit-card-information").value)
    // 1.1. checking with console.log
    console.log(`Ticket type: ${ticketType}`)
    console.log(`Number of tickets: ${quantityOfTicket}`)
    console.log(`Credit Card Information: ${creditCardInformation}`)

    // 2. validate user input
    // 2.1. check quantityOfTicket
    // 2.1.1. larger than zero?
    if(quantityOfTicket <= 0){
        alert("Quantity of ticket should be larger than zero!")
        return
    }

    // 2.2. check creditCardInformation
    // 2.2.1. Not negative
    if(creditCardInformation <= 0 || creditCardInformation > 999999){
        alert("Invalid credit card information!")
        return
    }

    // 2.2.2. exactly 6 digit long
    if(creditCardInformation.length != 6){
        alert("Credit card number should be 6 digital!")
        return
    }

    // 2.2.3. no character (example: "e")
    for(digit of creditCardInformation){
        if(['e', 'E', '+', '-'].includes(digit)){
            alert(`Invalid character: ${digit}`)
        }
    }

    // 3. Calculate subTotal and finalPrice
    // 3.1. Find price of the selected ticket
    switch(ticketType) {
        case 1:
            pricePerTicket = pricePerTicket1
            break
        case 2:
            pricePerTicket = pricePerTicket2
            break
        default:
            // Error
            console.log("Error: invalid ticket type!")
            return
    }
    // 3.2. Calculate Subtotal
    subTotal = quantityOfTicket * pricePerTicket
    // 3.3. Calculate Tax
    taxFee = tax * subTotal
    // 3.4. Calculate Final Price
    finalPrice = subTotal + taxFee
    
    // 4. Update and display summary
    // 4.1. update element
    document.getElementById("summary-number-of-ticket").innerText = quantityOfTicket
    document.getElementById("summary-price-per-ticket").innerText = "$" + pricePerTicket.toFixed(2)
    document.getElementById("summary-subtotal").innerText = "$" + subTotal.toFixed(2)
    document.getElementById("summary-tax").innerText = tax*100+"%"
    document.getElementById("summary-tax-fee").innerText = "$" + taxFee.toFixed(2)
    document.getElementById("summary-final-price").innerText = "$" + finalPrice.toFixed(2)
    // 4.2. display summary section
    document.getElementById("section-summary").style.display = "block"
}
document.querySelector("button").addEventListener("click", showSummary)