// Wait for document to fully load
document.onreadystatechange = () => {
  if (document.readyState !== 'complete') { return }

  var

  // Initiate Zabo SDK
  Zabo.init({
    clientId: 'J28kJ68mHfiXSYLqyoujgFA4mCrRGxBiUkELZS1YImTyD4DAhNmR9VZqpiFpqRUV',
    appId: 'd0e625eb91e9e40f67bf1ae9636d42745be8f37d',
    secretKey: 'f9daeb948eedfc34f657e8cdbebc965635b856bf4977e813f30c90070a6339c4',
    env: 'sandbox'
  })
  // Bind "connect" button
  document.querySelector('#connect').addEventListener('click', ev => {
    // Call the .connect() window
    Zabo.connect().onConnection(account => {

      console.log('account connected:', account)

    }).onError(error => {
      console.error('account connection error:', error)
    })
  })
}
// api, secret, wallet
