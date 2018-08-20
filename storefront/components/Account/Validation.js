class Validation {
    static isPasswordValid(str) {
        if (str.length === 0) return "You can't leave this empty.";
        return /(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(str) ? "" : "Password is invalid.";
    }
    static isConfirmPasswordValid(password, confirm) {
        if (confirm.length === 0) return "You can't leave this empty.";
        return (password === confirm? "" : "The two passwords do not match.");
    }
    static isEmailValid(str) {
        if (str.length === 0) return "You can't leave this empty.";
        return (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(str)) ? "" : "This email is invalid.";
    }
    static isDateValid(dateString) {
        if (confirm.length === 0) return "You can't leave this empty.";
        // First check for the pattern
        if (!(/^\d{1,2}\/\d{2}$/.test(dateString)))
            return "Date is invalid.";
        // Parse the date parts to integers
        var parts = dateString.split("/");
        var month = parseInt(parts[0], 10);
        var year = parseInt(parts[1], 10);
        // Check the ranges of month and year
        if (year < 0 || month === 0 || month > 12)
            return "Date is invalid.";
        return "";
    }
    static isNameValid(str) {
        if (str.length === 0) return "You can't leave this empty.";
        return (/^[A-Za-z\s'.]+$/.test(str))?"":"Name is invalid.";
    }
    static isCardNumberValid (str) {
        if (str.length === 0) return "You can't leave this empty.";
        return (/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
        .test(str))? "":"Card number is invalid";
    }
    static isCvvValid(str) {
        if (str.length === 0) return "You can't leave this empty.";
        return (/^[0-9]{3,4}$/.test(str))? "" :"CVV is invalid."
    }
    static isContactNumberValid (str) {
        if (str.length === 0) return "You can't leave this empty.";
        return (/(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
        .test(str))?"":"Contact number is invalid.";
      }
}
export default Validation
