# Solution 1


This code implements the **Brute Force** approach to the "Two Sum" problem. It uses two nested loops to compare every possible pair of numbers until it finds a sum that matches the target.

Here is the step-by-step visual representation of how the computer executes this code:

### 1. The Initial State
The array is stored in memory with indices 0 to 3.

| Index | 0 | 1 | 2 | 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Value** | **2** | **7** | **11** | **15** |

**Target:** `9`

---

### 2. Execution Trace (Step-by-Step)

#### **Step 1: Outer loop starts (i = 0)**
The pointer `i` fixes on the first element.
*   `nums[i]` is **2**
*   The inner loop `j` starts at `i + 1`, which is **1**.

| Index | 0 | 1 | 2 | 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Value** | **2** | **7** | **11** | **15** |
| **Pointers** | ↑ `i` | ↑ `j` | | |

*   **Check:** Is `nums[i] + nums[j] === target`?
*   **Calculation:** `2 + 7 = 9`
*   **Result:** `9 === 9` is **TRUE**.

#### **Step 2: Return Result**
Because the condition is met, the function immediately stops and returns the current indices.
*   **Returns:** `[0, 1]`

---

### 3. What if the target was 22? (Visualizing the movement)
If the target wasn't found immediately, here is how the pointers would move:

**Iteration A:** `i` stays at 0, `j` moves right.
1. `i` at [0], `j` at [1] (2+7=9) ❌
2. `i` at [0], `j` at [2] (2+11=13) ❌
3. `i` at [0], `j` at [3] (2+15=17) ❌

**Iteration B:** `i` moves to 1, `j` resets to `i + 1`.
1. `i` at [1], `j` at [2] (7+11=18) ❌
2. `i` at [1], `j` at [3] (7+15=22) ✅ **MATCH!**

---

### 4. Summary Table of the logic
| `i` (Outer) | `j` (Inner) | `nums[i]` | `nums[j]` | Sum | Match (Target 9)? |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **0** | **1** | **2** | **7** | **9** | **YES - RETURN [0, 1]** |
| 0 | 2 | 2 | 11 | 13 | - |
| 0 | 3 | 2 | 15 | 17 | - |
| 1 | 2 | 7 | 11 | 18 | - |

### Complexity Note
*   **Time Complexity:** $O(n^2)$ because for every element in the outer loop, we potentially scan the rest of the array in the inner loop.
*   **Space Complexity:** $O(1)$ because we aren't storing any extra data structures, just two index pointers.

---

# Solution 2

These two solutions use a **Hash Map** (or Object) to achieve a **One-Pass** search. Instead of checking every pair, the computer "remembers" what it has seen so far.

The logic is: **"If I am at number X, I am looking for (Target - X)."**

### The Core Logic (Target = 18)
| Current Value ($nums[i]$) | Needed Value ($18 - nums[i]$) | Action                                    |
| :------------------------ | :---------------------------- | :---------------------------------------- |
| **2**                     | **16**                        | Is 16 in the map? No. Store 2.            |
| **7**                     | **11**                        | Is 11 in the map? No. Store 7.            |
| **11**                    | **7**                         | Is 7 in the map? **YES!** Return indices. |

---

### Visual Step-by-Step Execution

#### **Step 1: $i = 0$**
*   **Current Number:** `2`
*   **Needed (`secondNumber`):** $18 - 2 = 16$
*   **Check Map:** Does Map have `16`? ❌
*   **Storage:** Save current number and index to Map.

**Map State:**

| Key (Value) | Value (Index) |
| ----------- | ------------- |
| 2           | 0             |

---

#### **Step 2: $i = 1$**
*   **Current Number:** `7`
*   **Needed (`secondNumber`):** $18 - 7 = 11$
*   **Check Map:** Does Map have `11`? ❌
*   **Storage:** Save current number and index to Map.

**Map State:**

| Key (Value) | Value (Index) |
| ----------- | ------------- |
| 2           | 0             |
| 7           | 1             |

---

#### **Step 3: $i = 2$**
*   **Current Number:** `11`
*   **Needed (`secondNumber`):** $18 - 11 = 7$
*   **Check Map:** Does Map have `7`? ✅ **YES!**
*   **Match Found:** The number `7` was stored previously at index `1`.

**Result:** `[2, 1]` (The current index `2` and the stored index `1`).

---

### Visualizing the Map vs. Object storage
Both solutions work almost identically in this context. Here is how they look in memory at the moment of completion:

**`Map` Solution:**
```javascript
Map(2) {
  2 => 0,
  7 => 1
}
```

**`Object` Solution:**
```javascript
{
  "2": 0,
  "7": 1
}
```

---

### Why is this better than the first version?

1.  **Brute Force ($O(n^2)$):** Like looking for a specific person in a crowd by comparing every person to every other person. 
2.  **Map/Object ($O(n)$):** Like having each person write their name on a clipboard as they walk into a room. You only have to look at the clipboard to see if the person you need is already inside.

**Key Difference in code:**
*   `Map` uses `.has()` and `.get()`.
*   `Object` uses `hasOwnProperty()` and `object[key]`.
*   **Performance:** `Map` is generally faster for frequent additions and lookups in modern JavaScript, while `Object` is a more "classic" approach.
---
# Solution 3

This approach is called the **Two Pointers** technique. It is highly efficient but, as noted in your code, it **only works on sorted arrays**. By starting at both ends and moving inward, we "squeeze" the array to find the target.

Here is the visual representation for `nums = [2, 7, 11, 15]` and `target = 18`.

---

### 1. Initial State
*   `left` starts at index `0` (value `2`)
*   `right` starts at index `3` (value `15`)

| Index | 0 | 1 | 2 | 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Value** | **2** | **7** | **11** | **15** |
| **Pointers** | **L** | | | **R** |

*   **Sum:** $2 + 15 = 17$
*   **Check:** $17 < 18$ (Sum is too small!)
*   **Action:** To get a larger sum, we move the `left` pointer to the right (`left++`).

---

### 2. Second Iteration
*   `left` is now index `1` (value `7`)
*   `right` stays at index `3` (value `15`)

| Index | 0 | 1 | 2 | 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Value** | 2 | **7** | 11 | **15** |
| **Pointers** | | **L** | | **R** |

*   **Sum:** $7 + 15 = 22$
*   **Check:** $22 > 18$ (Sum is too big!)
*   **Action:** To get a smaller sum, we move the `right` pointer to the left (`right--`).

---

### 3. Third Iteration
*   `left` stays at index `1` (value `7`)
*   `right` is now index `2` (value `11`)

| Index | 0 | 1 | 2 | 3 |
| :--- | :---: | :---: | :---: | :---: |
| **Value** | 2 | **7** | **11** | 15 |
| **Pointers** | | **L** | **R** | |

*   **Sum:** $7 + 11 = 18$
*   **Check:** $18 === 18$ ✅ **MATCH!**
*   **Result:** Return `[1, 2]`

---

### Summary Table of Movement

| Step | Left Index (Value) | Right Index (Value) | Sum | Comparison | Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 0 (**2**) | 3 (**15**) | 17 | $17 < 18$ | `left++` |
| 2 | 1 (**7**) | 3 (**15**) | 22 | $22 > 18$ | `right--` |
| 3 | 1 (**7**) | 2 (**11**) | 18 | $18 = 18$ | **FOUND!** |

---

### Why the array must be sorted:
The logic relies on the idea that:
1.  Moving the **Left pointer** forward **always increases** (or keeps equal) the sum.
2.  Moving the **Right pointer** backward **always decreases** (or keeps equal) the sum.

If the array were `[15, 2, 11, 7]`, moving the pointers would be random guessing because the values don't follow a predictable scale.

### Complexity:
*   **Time Complexity:** $O(n)$ — In the worst case, we only look at each number once as the pointers meet in the middle.
*   **Space Complexity:** $O(1)$ — We only store two variables (`left` and `right`), no matter how large the array is.