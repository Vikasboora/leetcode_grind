# Solution 1
This code is a JavaScript implementation of the **"Add Two Numbers"** problem (common on LeetCode). It simulates "Long Division" style addition but using **Linked Lists**.

Since the digits are stored in **reverse order** (2 → 4 → 3 represents the number 342), the code can simply start adding from the "Head" of the list, as that represents the ones place.

### The Input Lists
*   **l1:** `(2) -> (4) -> (3)`  *(342)*
*   **l2:** `(5) -> (6) -> (4)`  *(465)*

---

### Step-by-Step Visual Execution

#### **1. Setup**
*   **`l3`**: A "Dummy" node is created to act as the anchor for our result.
*   **`current`**: A pointer that starts at `l3` and moves forward as we add nodes.
*   **`carry`**: Starts at `0`.

---

#### **Iteration 1: The "Ones" Place**
*   **Values:** `l1 = 2`, `l2 = 5`, `carry = 0`
*   **Sum Calculation:** $2 + 5 + 0 = 7$
*   **Carry:** `Math.floor(7 / 10)` = `0`
*   **Digit:** `7 % 10` = `7`
*   **Action:** Create node **(7)**. Link it to the result.

**Visual State:**
```text
l1: [4] -> (3)
l2: [6] -> (4)
Result: (Dummy) -> (7)
                    ↑ current
Carry: 0
```

---

#### **Iteration 2: The "Tens" Place**
*   **Values:** `l1 = 4`, `l2 = 6`, `carry = 0`
*   **Sum Calculation:** $4 + 6 + 0 = 10$
*   **Carry:** `Math.floor(10 / 10)` = `1`
*   **Digit:** `10 % 10` = `0`
*   **Action:** Create node **(0)**. Link it to the result.

**Visual State:**
```text
l1: [3] -> null
l2: [4] -> null
Result: (Dummy) -> (7) -> (0)
                           ↑ current
Carry: 1
```

---

#### **Iteration 3: The "Hundreds" Place**
*   **Values:** `l1 = 3`, `l2 = 4`, `carry = 1` (from previous step)
*   **Sum Calculation:** $3 + 4 + 1 = 8$
*   **Carry:** `Math.floor(8 / 10)` = `0`
*   **Digit:** `8 % 10` = `8`
*   **Action:** Create node **(8)**. Link it to the result.

**Visual State:**
```text
l1: null
l2: null
Result: (Dummy) -> (7) -> (0) -> (8)
                                  ↑ current
Carry: 0
```

---

### Final Result
The code returns `l3.next`, which skips the "Dummy" node.

**Output:** `7 -> 0 -> 8`
*(This represents the number 807, which is $342 + 465$)*

---

### Summary of the Logic
| Iteration | l1.val | l2.val | Carry | Sum | New Node | Final Carry |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 2 | 5 | 0 | 7 | **7** | 0 |
| **2** | 4 | 6 | 0 | 10 | **0** | 1 |
| **3** | 3 | 4 | 1 | 8 | **8** | 0 |

### Key Takeaways
1.  **The Dummy Node (`l3`):** It's a standard trick in Linked List problems. It gives you a starting point so you don't have to write a special `if` statement to handle the first node.
2.  **The Carry:** This ensures that if you add $5 + 5$, you get `0` and carry the `1` to the next column.
3.  **The `while` Condition:** Note that it includes `carry !== 0`. This is important because if the last addition was $5 + 5$, the lists would be `null`, but you would still need to create one final node for the carry.
# Solution 2
This second solution takes a **"Conversion Approach."** Instead of adding nodes one by one like a math problem on paper, it converts the linked lists into actual numbers, adds them, and then converts the result back into a linked list.

Here is the step-by-step visual representation:

---

### Phase 1: Extraction (Building the Strings)
The code traverses the lists from head to tail and appends the values to strings.

**For `l1` (2 → 4 → 3):**
1.  `str` becomes `"2"`
2.  `str` becomes `"24"`
3.  `str` becomes `"243"`

**For `l2` (5 → 6 → 4):**
1.  `str2` becomes `"5"`
2.  `str2` becomes `"56"`
3.  `str2` becomes `"564"`

---

### Phase 2: Transformation (Reversing and Adding)
The code reverses the strings to put the digits in the "correct" numerical order (hundreds, tens, ones).

1.  **Reverse strings:**
    *   `str`: `"243"` → `"342"`
    *   `str2`: `"564"` → `"465"`
2.  **Perform Math:**
    *   $342 + 465 = 807$
3.  **Convert back to string and Reverse again:**
    *   `"807"` → reverse → **`"708"`** (This is done so we can build the list in the required reverse order).

---

### Phase 3: Reconstruction (Building the new List)
The code loops through the final string `"708"` to create the new nodes.

| Loop Index (`i`) | Digit | Linked List State |
| :--- | :--- | :--- |
| **Start** | - | `(Dummy: 0)` |
| **0** | `"7"` | `(Dummy) -> (7)` |
| **1** | `"0"` | `(Dummy) -> (7) -> (0)` |
| **2** | `"8"` | `(Dummy) -> (7) -> (0) -> (8)` |

**Final Return:** `dummy.next` → **`7 -> 0 -> 8`**

---

### Comparison of Solution 1 vs Solution 2

| Feature | Solution 1 (Math Approach) | Solution 2 (Conversion Approach) |
| :--- | :--- | :--- |
| **Logic** | Adds digit by digit (like a human). | Converts to Number, adds, converts back. |
| **Efficiency** | Very efficient ($O(n)$). | Less efficient (multiple string/array conversions). |
| **The "Trap"** | Works for any length of number. | **Fails for very long lists.** JavaScript Numbers lose precision after 16 digits. `BigInt()` would be needed for larger lists. |

### Visual Summary of the Data Flow:
`[2,4,3]` → `"243"` → `"342"` 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **+** &nbsp; → &nbsp; `807` &nbsp; → &nbsp; `"807"` &nbsp; → &nbsp; `"708"` &nbsp; → &nbsp; **7 → 0 → 8**
`[5,6,4]` → `"564"` → `"465"`