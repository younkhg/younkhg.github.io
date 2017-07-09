window.onload = function() {
    let functions = new Map();
    let article_text = document.getElementById("article_text");
    let article_links = document.getElementById("article_links");

    let empty_article = function() {
        article_text.textContent = "";
        while (article_links.firstChild) {
            article_links.removeChild(article_links.firstChild);
        }
    };

    let make_link = function(text, url) {
        let a = document.createElement('a');
        var linkText = document.createTextNode(text);
        a.appendChild(linkText);
        a.href = url;
        a.target = "_blank"; // new tab
        return a;
    }

    // 0:
    functions.set(0, function() {
        empty_article();
        article_text.textContent = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?";
        article_links.appendChild(document.createTextNode("links:"));
        article_links.appendChild(document.createElement("br"));
        article_links.appendChild(document.createTextNode("- "));
        article_links.appendChild(make_link("google", "http://www.google.com"));
        article_links.appendChild(document.createElement("br"));
        article_links.appendChild(document.createTextNode("- "));
        article_links.appendChild(make_link("naver", "http://www.naver.com"));
        console.log("0");
    });

    // 1:
    functions.set(1, function() {
        empty_article();

        article_text.textContent = "article 1";
    });

    // 2:
    functions.set(2, function() {
        empty_article();
        article_text.textContent = "article 2";
    });

    // 3:
    functions.set(3, function() {
        empty_article();
        article_text.textContent = "article 3";
    });

    // 4:
    functions.set(4, function() {
        empty_article();
        article_text.textContent = "article 4";
    });

    // linking links in nav will change content of article
    let navlinks = document.getElementsByClassName("navlink");
    for (let i = 0; i < navlinks.length; i += 1) {
        let link = navlinks[i];
        link.onclick = function() {
            functions.get(Number(link.id.substring(link.id.length - 2)))();
            return false;
        }
    }

    let homelink = document.getElementById("homelink");
    homelink.onclick = function() {
        empty_article();
        return false;
    }
}