// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation
// Design
// Maintain
// Analysis of Requirements
// Testing & Integration
// Planning

//Remote Repo: https://github.com/davidjlay2277/DevMt-Assess-1

////////////////// BEGIN SOLUTION 1: ///////////////////

//Declare a variable for each sdlc step, defining each as a string equivilant to that sdlc step
    const planning = "Planning"
    const implementation = "Implementation"
    const design = "Design"
    const maintain = "Maintain"
    const analysisRequirements = "Analysis of Requirements"
    const testIntegration = "Testing and Interigraiotn "
//Declare variable for the sequence of each step and define the steps accordingly
    let step1 = planning
    let step4 = implementation
    let step3 = design
    let step6 = maintain
    let step2 = analysisRequirements
    let step5 = testIntegration
//Print the steps in the correct sequence determined above, including a heading that descirbes output 
    console.log("PROBLEM 1:");
    console.log("Software Development Lifecycle (SDLC) Steps:");
    console.log(
        "Step 1: " + step1 + 
        "\nStep 2: " + step2 + 
        "\nStep 3: " + step3 + 
        "\nStep 4: " + step4 + 
        "\nStep 5: " + step5 + 
        "\nStep 6: " + step6);
////////////////// END SOLUTION 1: ///////////////////

//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
// PROVIDED code, moved to solution 1: const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 

//////////////////// BEGIN SOLUTION 2 ///////////////////
//Declare vaibles s[n]Descr as the descirpint of a given step [n]
    let s1Descr = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 
    let s2Descr = "After planning, the next step is to determine the business requirements and, at times, the technical requirements at a high level. The developers may work with the customers, clients and/or business analysts to clearly define what the software needs to be able to do in order to be considered successful. Along with planning, this step can include defining scope and identifying potential risks and challenges."
    let s3Descr = "With requirements defined, the solutions can be designed. The design should outline how the solution should be built; how it will meet the requirements. This will almost always include high level architecture. How granular the design becomes may depend on the complexity of the project as well as the methodology being applied. In general, the more iterative the methodology the less detailed the initial design might need to be. This will also drive to what degree risks and challenges are identified or resolved; highly iterative projects may aim to leverage the build as an opportunity the flush these out, whereas less iterative projects rely more robust designs to minimize issue discovery in later steps."
    let s4Descr = "This is the step where the solution/code is built according to the design. The software or feature is coded according the design laid out."
    let s5Descr = "Once the software is built (all the code is written), developer need to validate that it works as intended. Success criteria should correspond with the requirements. A QA checklist or test plan may have already been defined during steps 1 and 2. Not only does the code need to run with the expected result, but the code must integrate properly with other software it will interact with. If the software succeeds the test criteria, it can be interaggregate or launched into production."
    let s6Descr = "Once launched in production, the software should be monitored for success. This step may include providing rollout support, training, and/or documentation. This step should contribute to both a smooth transition into production as well as assuring the software can continue to receive updates and enhancement according to future needs."

//Print the steps in the correct sequence, similar to Problem 1, but now with the descriptions.
    console.log("\nPROBLEM 2:");
    console.log("SDLC Steps and Description:\n");
    console.log(
        "1. " + step1 + "\n" + s1Descr + 
        "\n\n2. " + step2 + "\n" + s2Descr +
        "\n\n3. " + step3 + "\n" + s3Descr +
        "\n\n4. " + step4 + "\n" + s4Descr +
        "\n\n5. " + step5 + "\n" + s5Descr +
        "\n\n6. " + step6 + "\n" + s6Descr);

////////////////// END SOLUTION 2: ///////////////////


//Assessment name: SDLC
//Completed: 5/21/23
//Author: David Lay
