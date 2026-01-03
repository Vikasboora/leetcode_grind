**The Goal:** Remove the **2nd** node from the end of the list: `1 -> 2 -> 3 -> 4 -> 5`.
**Target Node:** Node `4`.

---

### Step 1: Initialization
We create a `dummy` node (val=0) pointing to the head. We initialize `slow` and `fast` pointers at the dummy.

**Code:**
```javascript
let dummy = new ListNode(0, head);
let fast = dummy;
let slow = dummy;
```

**Visual:**
```text
[Dummy] -> [1] -> [2] -> [3] -> [4] -> [5] -> null
   ^
 S / F
```

---

### Step 2: Create the Gap (Move Fast)
We move the `fast` pointer `n` times (where `n = 2`). This creates a gap of 2 nodes between `fast` and `slow`.

**Code:**
```javascript
for (let i = 0; i < n; i++) { // i loops 0, 1
  fast = fast.next;
}
```

**Visual:**
1. `i=0`: Fast moves to [1]
2. `i=1`: Fast moves to [2]

```text
[Dummy] -> [1] -> [2] -> [3] -> [4] -> [5] -> null
   ^              ^
   S              F
```
*(Distance between S and F is now 2 nodes)*

---

### Step 3: Slide the Window (Move Both)
We move both pointers one step at a time until `fast` reaches the **last node** (when `fast.next` is null). This ensures `slow` lands exactly right before the node we want to delete.

**Code:**
```javascript
while (fast.next !== null) {
  fast = fast.next;
  slow = slow.next;
}
```

**Iteration 1:**
```text
[Dummy] -> [1] -> [2] -> [3] -> [4] -> [5] -> null
          ^              ^
          S              F
```

**Iteration 2:**
```text
[Dummy] -> [1] -> [2] -> [3] -> [4] -> [5] -> null
                 ^              ^
                 S              F
```

**Iteration 3 (Final):**
`fast` is at [5]. `fast.next` is null. The loop stops.
```text
[Dummy] -> [1] -> [2] -> [3] -> [4] -> [5] -> null
                        ^              ^
                        S              F
```
*Notice: `Slow` is now at [3]. The node to be deleted is `Slow.next` ([4]).*

---

### Step 4: Delete the Node
We bypass the node at `slow.next` by linking `slow` directly to `slow.next.next`.

**Code:**
```javascript
slow.next = slow.next.next;
```

**Visual:**
`slow` is at [3].
`slow.next` was [4].
`slow.next.next` is [5].
We connect [3] directly to [5].

```text
                 /-------------\
[Dummy] -> [1] -> [2] -> [3]    [4]    [5] -> null
                        ^              ^
                        S              F
```
*Node [4] is now garbage collected because nothing points to it.*

---

### Step 5: Final Result
We return `dummy.next`, which is the head of our modified list.

**Code:**
```javascript
return dummy.next;
```

**Visual Output:**
```text
1 -> 2 -> 3 -> 5 -> null
```

### Why use the Dummy node?
If the input was `[1]` and `n=1`, we would need to remove the head itself.
1. `Fast` would move to the end.
2. `Slow` (at Dummy) would stay put.
3. `Slow.next` (Dummy.next) would be updated to `Head.next` (null).
4. Result: `null`.
The dummy node handles the edge case where the **head** is the node being removed.