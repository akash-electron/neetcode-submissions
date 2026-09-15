class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let r = Array.from({ length: 9 }, () => new Set())
        let c = Array.from({ length: 9 }, () => new Set())
        let sq = Array.from({ length: 9 }, () => new Set())
        for (let i = 0; i < 9; i++) {

            for (let j = 0; j < 9; j++) {
                let box = Math.floor(i / 3) * 3 + Math.floor(j / 3)
                if (board[i][j] == ".") {
                    continue
                }
                if (r[i].has(board[i][j])
                    || c[j].has(board[i][j])
                    || sq[box].has(board[i][j])) {
                    return false
                }
                r[i].add(board[i][j])
                c[j].add(board[i][j])
                sq[box].add(board[i][j])
            }
        }
        return true
    }
}
