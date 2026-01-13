

A step-by-step visualization of how the `solution1` function merges the two sorted linked lists.

### Initial State
We start with two separate lists, a `dummyNode` to act as a placeholder for the start of the result, and a `current` pointer to build the list.

*   **l1:** `[1]` -> `[2]` -> `[4]` -> `null`
*   **l2:** `[1]` -> `[3]` -> `[4]` -> `null`
*   **Result (dummy):** `[0]` -> `null`
*   **Current:** points to `[0]`

---

### Step 1
Compare `l1` (1) and `l2` (1).
They are equal. The code takes `l1` (`l1.val <= l2.val`).

*   **Action:** `current.next` points to `l1`'s node `[1]`. `l1` moves to the next node `[2]`. `current` moves to the new node `[1]`.

**State:**
```text
Result: [0] -> [1] (from l1)
               ^
             Current

l1:     [2] -> [4] -> null
l2:     [1] -> [3] -> [4] -> null
```

---

### Step 2
Compare `l1` (2) and `l2` (1).
`l2` is smaller.

*   **Action:** `current.next` points to `l2`'s node `[1]`. `l2` moves to the next node `[3]`. `current` moves to the new node `[1]`.

**State:**
```text
Result: [0] -> [1] -> [1] (from l2)
                     ^
                   Current

l1:     [2] -> [4] -> null
l2:     [3] -> [4] -> null
```

---

### Step 3
Compare `l1` (2) and `l2` (3).
`l1` is smaller.

*   **Action:** `current.next` points to `l1`'s node `[2]`. `l1` moves to the next node `[4]`. `current` moves to the new node `[2]`.

**State:**
```text
Result: [0] -> [1] -> [1] -> [2] (from l1)
                           ^
                         Current

l1:     [4] -> null
l2:     [3] -> [4] -> null
```

---

### Step 4
Compare `l1` (4) and `l2` (3).
`l2` is smaller.

*   **Action:** `current.next` points to `l2`'s node `[3]`. `l2` moves to the next node `[4]`. `current` moves to the new node `[3]`.

**State:**
```text
Result: [0] -> [1] -> [1] -> [2] -> [3] (from l2)
                                 ^
                               Current

l1:     [4] -> null
l2:     [4] -> null
```

---

### Step 5
Compare `l1` (4) and `l2` (4).
They are equal. The code takes `l1`.

*   **Action:** `current.next` points to `l1`'s node `[4]`. `l1` moves to `null`. `current` moves to the new node `[4]`.

**State:**
```text
Result: [0] -> [1] -> [1] -> [2] -> [3] -> [4] (from l1)
                                       ^
                                     Current

l1:     null
l2:     [4] -> null
```

---

### Step 6: Loop Termination & Cleanup
The `while` loop condition (`l1 !== null && l2 !== null`) fails because `l1` is now `null`.

The code executes: `current.next = (l1 !== null) ? l1 : l2;`

Since `l1` is null, we attach the rest of `l2` to the end of `current`.

*   **Action:** Attach remaining `l2` (`[4]`) to `current.next`.

**Final State:**
```text
Result: [0] -> [1] -> [1] -> [2] -> [3] -> [4] -> [4] -> null
```

---

### Return
The function returns `dummyNode.next`, skipping the dummy placeholder.

**Final Output:**
`[1] -> [1] -> [2] -> [3] -> [4] -> [4]`