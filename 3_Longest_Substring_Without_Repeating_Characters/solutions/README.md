

This function implements the **Sliding Window** algorithm to find the longest substring without repeating characters.

Here is a visual representation of how the code executes step-by-step using the input string `"pwwkew"`.

### 1. The Visual Trace (Step-by-Step)

We use `[ ]` to represent the current "window" of characters being looked at.
*   **`right`**: The loop index (expands the window).
*   **`left`**: The variable that shifts the window start when a duplicate is found.
*   **`maxLength`**: The best score recorded so far.

**Input String:** `p w w k e w`
**Indices:**      `0 1 2 3 4 5`

---

#### Initialization
`obj = {}`, `maxLength = 0`, `left = 0`

---

#### Step 1: `right` = 0, Char = 'p'
*   **Check:** Is 'p' in `obj`? **No**.
*   **Action:** Add 'p' to `obj` with index 0.
*   **Window Size:** `0 - 0 + 1` = **1**.

```text
String: [p] w w k e w
         ^
Index:   0 1 2 3 4 5
Left:    0
MaxLen:  1
Obj:     { p: 0 }
```

---

#### Step 2: `right` = 1, Char = 'w'
*   **Check:** Is 'w' in `obj`? **No**.
*   **Action:** Add 'w' to `obj` with index 1.
*   **Window Size:** `1 - 0 + 1` = **2**.

```text
String: [p w] w k e w
         ^ ^
Index:   0 1 2 3 4 5
Left:    0
MaxLen:  2
Obj:     { p: 0, w: 1 }
```

---

#### Step 3: `right` = 2, Char = 'w'
*   **Check:** Is 'w' in `obj`? **Yes** (index 1).
*   **Condition Check:** Is `1` (prev index) >= `left` (0)? **Yes**.
*   **Action:** **DUPLICATE FOUND.** Move `left` to `prev index + 1` -> `1 + 1 = 2`.
*   **Update:** Update 'w' in `obj` to index 2.
*   **Window Size:** `2 - 2 + 1` = **1**.

```text
String: p w [w] k e w
           ^
Index:   0 1 2 3 4 5
Left:      2  <-- Moved forward to skip duplicate
MaxLen:  2
Obj:     { p: 0, w: 2 }
```

---

#### Step 4: `right` = 3, Char = 'k'
*   **Check:** Is 'k' in `obj`? **No**.
*   **Action:** Add 'k' to `obj` with index 3.
*   **Window Size:** `3 - 2 + 1` = **2**.

```text
String: p w [w k] e w
           ^ ^
Index:   0 1 2 3 4 5
Left:      2
MaxLen:  2
Obj:     { p: 0, w: 2, k: 3 }
```

---

#### Step 5: `right` = 4, Char = 'e'
*   **Check:** Is 'e' in `obj`? **No**.
*   **Action:** Add 'e' to `obj` with index 4.
*   **Window Size:** `4 - 2 + 1` = **3**. (New Max!)

```text
String: p w [w k e] w
           ^ ^ ^
Index:   0 1 2 3 4 5
Left:      2
MaxLen:  3  <-- Updated
Obj:     { p: 0, w: 2, k: 3, e: 4 }
```

---

#### Step 6: `right` = 5, Char = 'w'
*   **Check:** Is 'w' in `obj`? **Yes** (index 2).
*   **Condition Check:** Is `2` (prev index) >= `left` (2)? **Yes**.
*   **Action:** **DUPLICATE FOUND.** Move `left` to `2 + 1 = 3`.
*   **Update:** Update 'w' in `obj` to index 5.
*   **Window Size:** `5 - 3 + 1` = **3**.

```text
String: p w w [k e w]
               ^ ^ ^
Index:   0 1 2 3 4 5
Left:        3  <-- Moved forward
MaxLen:  3
Obj:     { p: 0, w: 5, k: 3, e: 4 }
```

---

### 2. Logic Flowchart

Here is a visual flow of how the `if` condition inside your loop decides what to do.

```text
          START LOOP (s[right])
                   |
                   v
      +----------------------------+
      | Is s[right] in obj ?       |
      +------------+---------------+
                   |
          +--------+--------+
          |                 |
         NO               YES
          |                 |
          v                 v
+-------------------+  +---------------------------+
| Keep 'left' where |  | Is old index >= 'left' ?  |
| it is            |  +-----------+---------------+
+-------------------+              |
                               +---+---+
                               |       |
                              NO      YES <-- [Duplicate in Window]
                               |       |
                               |       v
                               |  +-------------------+
                               |  | Move 'left' to     |
                               |  | obj[s[right]] + 1  |
                               |  +-------------------+
                               |
                               v
                        +------------------+
                        | Both paths merge:|
                        | Update obj[] with|
                        | current 'right'  |
                        +------------------+
                               |
                               v
                 +----------------------------+
                 | Update maxLength (if bigger)|
                 +------------+---------------+
                              |
                              v
                    Next Iteration (right++)
```

### 3. Variable State Table

| Iteration | Right (Char) | `obj` State (Last Index) | `left` Before | Condition Met? | `left` After | Window Size | `maxLength` |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | 0 (`p`) | `{p:0}` | 0 | No | 0 | 1 | **1** |
| **2** | 1 (`w`) | `{p:0, w:1}` | 0 | No | 0 | 2 | **2** |
| **3** | 2 (`w`) | `{p:0, w:2}` | 0 | **Yes** (`1` >= `0`) | **2** | 1 | 2 |
| **4** | 3 (`k`) | `{..., k:3}` | 2 | No | 2 | 2 | 2 |
| **5** | 4 (`e`) | `{..., e:4}` | 2 | No | 2 | 3 | **3** |
| **6** | 5 (`w`) | `{..., w:5}` | 2 | **Yes** (`2` >= `2`) | **3** | 3 | 3 |

**Final Result:** `3` (The substrings are "wke" and "kew").