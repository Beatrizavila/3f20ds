función hanoi(s, d, e, n) {
    condición de terminación
    si (n <-0 ) {
        devolución
    }
    hanoi(s, e, d, n - 1)
    consola. log("Move Disk-" + n + " FROM " + s + " TO " + d);
    hanoi(e, d, s, n - 1);
}
hanoi('s', 'd', 'e', 3)