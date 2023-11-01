const foo=1
const hi=()=>{
    console.log('Hi')
}

//  function hello(params) {
//     console.log('hello')
// }
const bar={
    baz:'Hello',
    jay:()=>{
        console.log('jay')
    },
     foo,
     hi,
     hello(){
        console.log('hello')
     }
    // foo:foo,
    //foo:1
}
bar.hi()

