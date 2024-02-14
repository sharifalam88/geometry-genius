// Triangle function
function calculationTriangle(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBase.value;
    const triangleFinalBase = parseFloat(triangleBaseValue);
        triangleBase.value = '';

    const triangleHeight = document.getElementById('triangle-height');
    const triangleHeightValue =triangleHeight.value;
    const triangleFinalHeight = parseFloat(triangleHeightValue);
        triangleHeight.value='';

     const finalResult = 0.5 * triangleFinalBase * triangleFinalHeight;
     const finalResultValue = finalResult.toString();
    // Show result
   const resultBox = document.getElementById('show-result');
   const p = document.createElement('p');
   p.innerText = `* The Triangle Result is :  ${finalResultValue}` ;

   resultBox.appendChild(p);
}
// Rectangle Function

function calculationRectangle(){
    const rectangleBase = document.getElementById('rectangle-w');
    const rectangleBaseValue = rectangleBase.value;
    const rectangleFinalBase = parseFloat(rectangleBaseValue);
        rectangleBase.value = '';

    const rectangleHeight = document.getElementById('rectangle-i');
    const rectangleHeightValue =rectangleHeight.value;
    const rectangleFinalHeight = parseFloat(rectangleHeightValue);
        rectangleHeight.value='';

        const finalResult =  rectangleFinalBase * rectangleFinalHeight;
     const finalResultValue = finalResult.toString();

        // show result
        const resultBox = document.getElementById('show-result');
        const p = document.createElement('p');
        p.innerText = `* The Rectangle Result is :  ${finalResultValue}` ;
     
        resultBox.appendChild(p);   
}

// Parallelogram calculation

function calculationParallelogram(){
    const parallelogramBase = document.getElementById('parallelogram-b');
    const parallelogramBaseValue = parallelogramBase.value;
    const parallelogramFinalBase = parseFloat(parallelogramBaseValue);
        parallelogramBase.value = '';

    const parallelogramHeight = document.getElementById('parallelogram-h');
    const parallelogramHeightValue =parallelogramHeight.value;
    const parallelogramFinalHeight = parseFloat(parallelogramHeightValue);
    parallelogramHeight.value='';

        const finalResult = 0.5 * parallelogramFinalBase * parallelogramFinalHeight;
     const finalResultValue = finalResult.toString();

        // show result
        const resultBox = document.getElementById('show-result');
        const p = document.createElement('p');
        p.innerText = `* The Parallelogram Result is :  ${finalResultValue}` ;
     
        resultBox.appendChild(p);   
}
// Rhombus calculation

function calculationRhombus(){
    const rhombusBase = document.getElementById('rhombus-d1');
    const rhombusBaseValue = rhombusBase.value;
    const rhombusFinalBase = parseFloat(rhombusBaseValue);
        rhombusBase.value = '';

    const rhombusHeight = document.getElementById('rhombus-d2');
    const rhombusHeightValue =rhombusHeight.value;
    const rhombusFinalHeight = parseFloat(rhombusHeightValue);
        rhombusHeight.value='';

     const finalResult = 0.5 * rhombusFinalBase * rhombusFinalHeight;
     const finalResultValue = finalResult.toString();
    // Show result
   const resultBox = document.getElementById('show-result');
   const p = document.createElement('p');
   p.innerText = `* The Rhombus Result is :  ${finalResultValue}` ;

   resultBox.appendChild(p);
}

// Pentagon calculation

function calculationPentagon(){
    const pentagonBase = document.getElementById('pentagon-p');
    const pentagonBaseValue = pentagonBase.value;
    const pentagonFinalBase = parseFloat(pentagonBaseValue);
        pentagonBase.value = '';

    const pentagonHeight = document.getElementById('pentagon-b');
    const pentagonHeightValue =pentagonHeight.value;
    const pentagonFinalHeight = parseFloat(pentagonHeightValue);
        pentagonHeight.value='';

     const finalResult = 0.5 * pentagonFinalBase * pentagonFinalHeight;
     const finalResultValue = finalResult.toString();
    // Show result
   const resultBox = document.getElementById('show-result');
   const p = document.createElement('p');
   p.innerText = `* The Pentagon Result is :  ${finalResultValue}` ;

   resultBox.appendChild(p);
}
// Ellipse calculation

function calculationEllipse(){
    const ellipseBase = document.getElementById('ellipse-a');
    const ellipseBaseValue = ellipseBase.value;
    const ellipseFinalBase = parseFloat(ellipseBaseValue);
        ellipseBase.value = '';

    const ellipseHeight = document.getElementById('ellipse-b');
    const ellipseHeightValue =ellipseHeight.value;
    const ellipseFinalHeight = parseFloat(ellipseHeightValue);
        ellipseHeight.value='';

        // The approximately pai value is = 3.14
     const finalResult = 3.14 * ellipseFinalBase * ellipseFinalHeight;
     const finalResultValue = finalResult.toString();
    // Show result
   const resultBox = document.getElementById('show-result');
   const p = document.createElement('p');
   p.innerText = `* The Ellipse Result is :  ${finalResultValue}` ;

   resultBox.appendChild(p);
}
