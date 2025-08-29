### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?



## Answers to the Following Questions

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
   **Ans :**
    - getElementById("idName")
      - শুধু একটাই element ধরে যেটার id দেওয়া আছে।
      - id সবসময় ইউনিক হয়।
    - Example:
      - `document.getElementById("title");`
  
    - getElementsByClassName("className")
      - একই ক্লাসের অনেকগুলো element ধরে।
      - এটাতে একটা collection (array-like object) পাওয়া যায়।
    - Example:
      - `document.getElementsByClassName("card");`
  
    - querySelector()
      - querySelector দিয়ে element সিলেক্ট করা যায় (id, class, tag—সবই কাজ করে)।
      - প্রথম ম্যাচ হওয়া element টাকে রিটার্ন করে।
    - Example:
      - `document.querySelector(".card");`
  
    - querySelectorAll()
      - querySelector-এর মতোই, কিন্তু সব element কে ধরে আনে (NodeList আকারে)।
      - এটাতে একটা collection (array-like object) পাওয়া যায়।
    - Example:
      - `document.querySelectorAll(".card");`

2. How do you **create and insert a new element into the DOM**?  
   **Ans :**
   1. `document.createElement()` দিয়ে element বানাতে হয়।
   2. `innerText` বা `innerHTML` দিয়ে কনটেন্ট যোগ করতে হয়।
   3. `appendChild()` বা `insertBefore()` দিয়ে DOM এ বসানো হয়।
   - Example
     - `const newDiv = document.createElement("div");` 
     - `newDiv.innerText = "Hello World!";`
     - `document.body.appendChild(newDiv);`

3. What is **Event Bubbling** and how does it work?  
   **Ans :**
    - Event Bubbling মানে হলো—যখন কোনো element এ event ঘটে (ধরি একটা বাটন ক্লিক), তখন সেই event শুধু বাটনে থাকে না, বরং ধাপে ধাপে তার parent > grandparent > document পর্যন্ত উঠে যায়।
    - একটা পানির বাবল যেভাবে নিচ থেকে ওপরে উঠে যায়, event ও তেমনি parent element পর্যন্ত পৌঁছে যায়।
    - Example
       - `document.getElementById("child").addEventListener("click", () => {`
         - `console.log("Child clicked!");`
       - `});`
       - `document.getElementById("parent").addEventListener("click", () => {`
         - `console.log("Parent clicked!");`
       - `});`
   -  Child এ ক্লিক করলে দুটোই ট্রিগার হবে।

4. What is **Event Delegation** in JavaScript? Why is it useful?  
   **Ans :**
    - Event Delegation মানে হলো, অনেকগুলো child element এর জন্য আলাদা আলাদা event listener না দিয়ে, তাদের common parent element এ একটাই listener বসানো।
    - পরে event.target দিয়ে চেক করে বুঝে নেওয়া যায় কোন child এ event হয়েছে।
  - **কেন দরকার?**
    - Performance ভালো হয় (একসাথে হাজারো element থাকলেও সমস্যা হয় না)।
    - Dynamic element (যেগুলো পরে add হবে) সেগুলোকেও সহজে হ্যান্ডেল করা যায়।
    - Example
         - `document.getElementById("list").addEventListener("click", function(e) {`
           - ` if (e.target.tagName === "li") {`
             - `console.log("You clicked:", e.target.innerText);`
         - `}`
           - `});`

5. What is the difference between **preventDefault() and stopPropagation()** methods?  
   **Ans :**
   - preventDefault()
      - কোনো element এর ডিফল্ট কাজ থামায়।
      - যেমন: form submit করলে পেজ reload হয় > সেটা থামাতে হলে ব্যবহার করি।
   - Example:
      - `form.addEventListener("submit", function(e) {`
        - ` e.preventDefault();`
      - `});`

   - stopPropagation()
      - Event Bubbling বন্ধ করে।
      - মানে child এ event হলে parent এ আর যাবে না।
   - Example:
      - `child.addEventListener("click", function(e) {`
        - `e.stopPropagation();`
      - `});`
