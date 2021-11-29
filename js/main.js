console.log("Hello Parcel!!!");

async function BabelTest(){
    const promise = Promise.resolve("Babel Test")
    console.log(await promise)
}

BabelTest()