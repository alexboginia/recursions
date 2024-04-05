// Завдання 1
function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } else {
        return reverseStringRecursive(str.substring(1)) + str.charAt(0);
    }
}


console.log(reverseStringRecursive("Hello"));

// хвостова рекурсія

function reverseStringTailRecursive(str, reversedStr = '') {
    if (str === '') {
        console.log(reversedStr);
        return;
    } else {
        reverseStringTailRecursive(str.substring(1), str.charAt(0) + reversedStr);
    }
}


reverseStringTailRecursive("Hello");

// Завдання 2

function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }

    const nextNode = head.next;
    head.next = swapPairs(nextNode.next);
    nextNode.next = head;

    return nextNode;
}

// Приклади викликів
const head1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
console.log(swapPairs(head1)); // Output: { val: 2, next: { val: 1, next: { val: 4, next: { val: 3, next: null } } } }

// хвостова рекурсія
function swapPairs(head) {
    function swap(node) {
        if (!node || !node.next) {
            return node;
        }

        const nextNode = node.next;
        node.next = nextNode.next;
        nextNode.next = node;

        return nextNode;
    }

    const dummy = { val: 0, next: head };
    let current = dummy;

    while (current.next && current.next.next) {
        current.next = swap(current.next);
        current = current.next.next;
    }

    return dummy.next;
}

// Приклади викликів
const head2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
console.log(swapPairs(head2)); // Output: { val: 2, next: { val: 1, next: { val: 4, next: { val: 3, next: null } } } }


// Завдання 3

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Приклади викликів
console.log(fibonacciRecursive(3)); // Output: 2

// хвостова рекурсія
function fibonacciTailRecursive(n, a = 0, b = 1) {
    if (n === 0) {
        return a;
    }

    if (n === 1) {
        return b;
    }

    return fibonacciTailRecursive(n - 1, b, a + b);
}

// Приклади викликів
console.log(fibonacciTailRecursive(4)); // Output: 3


// Завдання 4

function climbStairsRecursive(n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
}

// Приклади викликів
console.log(climbStairsRecursive(3)); // Output: 3

// хвостова рекурсія
function climbStairsTailRecursive(n, a = 1, b = 1) {
    if (n === 0) {
        return a;
    }

    if (n === 1) {
        return b;
    }

    return climbStairsTailRecursive(n - 1, b, a + b);
}

// Приклади викликів
console.log(climbStairsTailRecursive(2)); // Output: 2


// Завдання 5

function powerRecursive(x, n) {
    if (n === 0) {
        return 1;
    }

    if (n < 0) {
        return 1 / powerRecursive(x, -n);
    }

    if (n % 2 === 0) {
        const temp = powerRecursive(x, n / 2);
        return temp * temp;
    } else {
        return x * powerRecursive(x, n - 1);
    }
}

// Приклади викликів
console.log(powerRecursive(2.00000, 10)); // Output: 1024.00000
console.log(powerRecursive(2.10000, 3)); // Output: 9.26100

// хвостова рекурсія
function powerTailRecursive(x, n, result = 1) {
    if (n === 0) {
        return result;
    }

    if (n < 0) {
        return powerTailRecursive(x, n + 1, result / x);
    }

    if (n === 1) {
        return result * x;
    }

    return powerTailRecursive(x, n - 1, result * x);
}

// Приклади викликів
console.log(powerTailRecursive(2.10000, 3)); // Output: 9.26100
console.log(powerTailRecursive(2.00000, -2)); // Output: 0.25000
