function calc(i) {

    var Small = {
        'Zero': 0,
        'One': 1,
        'Two': 2,
        'Three': 3,
        'Four': 4,
        'Five': 5,
        'Six': 6,
        'Seven': 7,
        'Eight': 8,
        'Nine': 9,
        'Ten': 10,
        'Eleven': 11,
        'Twelve': 12,
        'Thirteen': 13,
        'Fourteen': 14,
        'Fifteen': 15,
        'Sixteen': 16,
        'Seventeen': 17,
        'Eighteen': 18,
        'Nineteen': 19,
        'Twenty': 20,
    };
    
    var n = i.split(".");
    var n1 = Small[n[2]];
    var n2 = Small[n[4]];

    if (n[0] != "Calc") {
        return
    }
    if (n[1] != "New") {
        return
    }
    if (n[3] == "Plus") {
        return n1 + n2
    }
    if (n[3] == "Subtract") {
        return n1 - n2
    }
    if (n[3] == "Multiply") {
        return n1 * n2
    }
    if (n[3] == "Divide") {
        return n1 / n2
    }
    return Error
}
