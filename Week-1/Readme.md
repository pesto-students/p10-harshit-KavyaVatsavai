` 				`**Assignment-1**

**Exercise1.1**

**1.Browser :** 

A web browser, also known as a “browser,” is an application software that allows users to find, access, display, and view websites. 


A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them.

**2.High  level components of browser:**


### **1. User Interface**
The user interface is the first page that you see when you open the web browser. This page has the address bar, forward/ backward button, menu, bookmarking option, and a few more options.

### **2. Browser Engine**
The browser engine acts as an interface between the rendering engine and the UI of the browser. Based on the input, it manipulated the rendering engine to provide output.
### **3. Rendering engine**
The rendering engine is responsible for producing requested content to the browser and displaying it on the screen. It parses the HTML documents and then converts them to readable form. All the browsers we know have their own rendering engines.

- The safari uses WebKit.
- Chrome and Opera use Blink ( fork of WebKit).
- Internet explored use Trident.
- Firefox uses Gecko.

The WebKit is an open-source rendering engine and was made for Linux. It has been modified the Apple to support mac and windows too.
### **4. Networking**
The network layer is responsible for security and communication on the internet. It is also used for HTTP requests and to cache the documents retrieved in order to reduce network traffic.
### **5. UI Backend**
It is for drawing basic boxes and windows/ widgets. This is for a generic interface and independent of any specific platform. Behind all this, it uses an Operating system for UI methods.
### **6. JavaScript Interpreter**
As we all know the JavaScript is responsible for all the websites/ webpages. All these pages are written in JavaScript language. Therefore this interpreter translates these pages and these are sent to the rendering engine to display the final results.
### **7. Data persistence**
Data persistence or storage is for saving the data locally, like cookies. The browsers support storage mechanisms like IndexedDB, WebSQL, File System, etc. to store databases locally on your computer. This way user data is handled like cache, bookmarks, cookies, etc.

Please refer the image for better understanding:

![alt text](https://github.com/pesto-students/p10-harshit-KavyaVatsavai/tree/code-kavya/componentsofbrowsers.png?raw=true)


**3.The rendering engine**

The responsibility of the rendering engine, rendering, that is display of the requested contents on the browser screen. By default the rendering engine can display HTML and XML documents and images.

Our reference browsers - Firefox, Chrome and Safari are built upon two rendering engines. Firefox uses Gecko - a "home made" Mozilla rendering engine. Both Safari and Chrome use Webkit. Webkit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.

The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8K chunks. After that this is the basic flow of the rendering engine:

![alt text](https://github.com/pesto-students/p10-harshit-KavyaVatsavai/tree/code-kavya/renderingEngineFlow.png?raw=true)



The rendering engine will start parsing the HTML document and turn the tags to DOM nodes in a tree called the "content tree". It will parse the style data, both in external CSS files and in style elements. The styling information together with visual instructions in the HTML will be used to create another tree - the render tree. The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen. After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

![alt text](https://github.com/pesto-students/p10-harshit-KavyaVatsavai/tree/code-kavya/renderTreeConstruction.png?raw=true)


Render tree construction

While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

Firefox calls the elements in the render tree "frames". Webkit uses the term renderer or render object. A renderer knows how to layout and paint itself and it's children.

` 	`**4.Parsing:**

**Parsing** means analyzing and converting a program into an internal format that a runtime environment can actually run, for example the JavaScript engine inside browsers. The browser parses HTML into a DOM tree.HTML parsing involves tokenization and tree construction. HTML tokens include start and end tags, as well as attribute names and values. If the document is well-formed, parsing it is straightforward and faster. The parser parses tokenized input into the document, building up the document tree.

When the HTML parser finds non-blocking resources, such as an image, the browser will request those resources and continue parsing. Parsing can continue when a CSS file is encountered, but <script> tags—particularly those without an async or defer attribute—blocks rendering, and pauses parsing of HTML.

When the browser encounters CSS styles, it parses the text into the CSS Object Model , a data structure it then uses for styling layouts and painting. The browser then creates a render tree from both these structures to be able to paint the content to the screen. JavaScript is also downloaded, parsed, and then executed.

JavaScript parsing is done during [compile time](https://developer.mozilla.org/en-US/docs/Glossary/Compile_time) or whenever the [parser](https://developer.mozilla.org/en-US/docs/Glossary/Parser) is invoked, such as during a call to a method.

## **5.Script processor**

Javascript code to process an event. The processor uses a pure Go implementation of ECMAScript 5.1 and has no external dependencies. This can be useful in situations where one of the other processors doesn’t provide the functionality you need to filter events.

## **6.Tree Construction:**

The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.

In the previous section on constructing the object model, we built the DOM and the CSSOM trees based on the HTML and CSS input. However, both of these are independent objects that capture different aspects of the document: one describes the content, and the other describes the style rules that need to be applied to the document. How do we merge the two and get the browser to render pixels on the screen?
### Summary
The DOM and CSSOM trees combine to form the render tree.

Render tree contains only the nodes required to render the page.

Layout computes the exact position and size of each object.

The last step is paint, which takes in the final render tree and renders the pixels to the screen.

First, the browser combines the DOM and CSSOM into a "render tree," which captures all the visible DOM content on the page and all the CSSOM style information for each node.

![alt text](https://github.com/pesto-students/p10-harshit-KavyaVatsavai/tree/code-kavya/treeConstruction.png?raw=true)


To construct the render tree, the browser roughly does the following:

Starting at the root of the DOM tree, traverse each visible node.

Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.

Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.

For each visible node, find the appropriate matching CSSOM rules and apply them.

Emit visible nodes with content and their computed styles.

The final output is a render tree that contains both the content and style information.

##
## **7.Order of processing scripts** 
Scripts are parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. This means that the process is **synchronous**.

If the script is external then it first has to be fetched from the network (also synchronously). All the parsing stops until the fetch completes.

HTML5 adds an option to mark the script as asynchronous so that it gets parsed and executed by a different thread.


**8.Layout** 

It is the process by which the width, height, and location of all the nodes in the render tree are determined, plus the determination of the size and position of each object on the page. *Reflow* is any subsequent size and position determination of any part of the page or the entire document.

## **Layout of the render tree**
When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout.

HTML uses a flow-based layout model, meaning that most of the time it can compute the geometry in a single pass. The coordinate system is relative to the root renderer. Top and left coordinates are used.

Layout is a recursive process — it begins at the root renderer, which corresponds to the <html> element of the HTML document. Layout continues recursively through a part or the entire renderer hierarchy, computing geometric info for each renderer that requires it.

The position of the root renderer is 0,0 and its dimensions have the size of the visible part of the browser window (a.k.a. the viewport).

Starting the layout process means giving each node the exact coordinates where it should appear on the screen.
## **Painting the render tree**
In this stage, the renderer tree is traversed and the renderer’s paint() method is called to display the content on the screen.

Painting can be global or incremental (similar to layout):

- **Global** — the entire tree gets repainted.
- **Incremental** — only some of the renderers change in a way that does not affect the entire tree. The renderer invalidates its rectangle on the screen. This causes the OS to see it as a region that needs repainting and to generate a paint event. The OS does it in a smart way by merging several regions into one.

In general, it’s important to understand that painting is a gradual process. For better UX, the rendering engine will try to display the contents on the screen as soon as possible. It will not wait until all the HTML is parsed to start building and laying out the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the content items that keep coming from the network








