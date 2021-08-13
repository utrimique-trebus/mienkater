// https://docs.cypress.io/api/introduction/api.html

describe("Hey! Let's begin by making sure the page loads the 3 elements", () => {
  it("Visit app root", () => {
    cy.visit("/");
  });
  it("Checking the navbar", () => {
    cy.wait(5000);
    cy.get("nav").should("be.visible");
    cy.get("nav").should("have.class", "bg-teagreen");
    cy.get("nav").contains("Közélet utca");
    cy.get("nav").contains("Kultúr utca");
    cy.get("nav").contains("Sport utca");
    cy.get("nav").contains("Világ utca");
    cy.get("nav").contains("Irodalom utca");
    cy.get("nav").contains("Diák utca");
    cy.get("nav").contains("Történelem utca");
    cy.get("nav").then(($el) => {
      if (Cypress.dom.isScrollable($el)) {
        cy.get("nav").scrollTo(200, 0);
      }
    });
  });
  it("Checking the contents of the page", () => {
    // Page Title
    cy.get("span").should("be.visible");

    // Cards Existence
    if (cy.get("main")) {
      // Card content
      cy.get("main").each(($el) => {
        cy.wrap($el)
          .find("img")
          .should("have.attr", "src");
        cy.wrap($el)
          .find("span")
          .should("contain", "cikke:");
        cy.wrap($el)
          .find("h1")
          .contains(/\w/);
      });
    } else {
      cy.get("body").contains("svg");
      cy.get("body").contains("Nem hallottunk híreket a piacon");
      cy.get("body").contains("Próbálkozz meg később");
    }
  });

  it("Checking the footer", () => {
    cy.get("footer").should("have.class", "bg-burgundy");
    cy.get("footer")
      .find("div")
      .should("have.class", "grid");
    cy.get("footer").contains("Meet the Team");
    cy.get("footer").contains("Elérhetőségek");
    cy.get("footer").contains("Miénk itt a Tér");
  });

  it("Checking the footer images", () => {
    cy.get("footer")
      .find("img")
      .each(($el, index, $lis) => {
        if (
          cy
            .wrap($el)
            .should("be.visible")
            .click()
            .click()
        ) {
          cy.get(".left-12").should("be.visible");
        }
      })
      .then(($lis) => {
        expect($lis).to.have.length(16);
      });
  });
});

describe("Okay! Now let`s visit an article", () => {
  it("Visit article using a card or other method", () => {
    if (cy.get("main")) {
      cy.get("main").click();
      cy.wait(5000);

      // Testing the headline stuff
      cy.get("main").should("have.class", "bg-black");
      cy.get(".relative")
        .find("img")
        .should("have.attr", "src");
      cy.get(".relative")
        .find("span")
        .eq(0)
        .contains(/\w/);
      cy.get(".relative")
        .find("span")
        .eq(1)
        .contains(/\w/);

      // Here comes the content
      cy.get(".px-3").each(($el) => {
        cy.wrap($el).contains(/\w/);
      });

      // Will add the suggestions later
    }
  });
});

describe("Some basic navigation", () => {
  it("Let`s visit some streets", () => {
    cy.get('[href="/street/1"]').click();
    cy.wait(2000);
    if (!cy.get("main")) {
      cy.get("body").contains("svg");
      cy.get("body").contains("Nem hallottunk híreket a piacon");
      cy.get("body").contains("Próbálkozz meg később");
    }
    cy.get('[href="/street/5"]').click();
    cy.wait(2000);
    if (!cy.get("body").find("main")) {
      cy.get("body").contains("svg");
      cy.get("body").contains("Nem hallottunk híreket a piacon");
      cy.get("body").contains("Próbálkozz meg később");
    }
  });
});
