import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'




render (
    {/*<Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Container} onEnter={onCartEnter} >
              <IndexRedirect to="/products" />
              <Route
                path="/products"
                component={ProductsContainer}
                onEnter={onProductsEnter} />
              <Route
                path="/products/:productId"
                component={ProductContainer}
                onEnter={onCurrentProductEnter}/>

              <Route path="/login" component={Login} />
              <Route path="/logout" component={WhoAmI} />
              <Route path="/user" component={User} />
              <Route path="/reviews" component={Review} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path='/celebs' component={Celeb} onEnter={onCelebsEnter}/>
              <Route path='/celebs/:celebId' component={CelebProducts} onEnter={onCelebProductEnter}/>
              <Route
                path="/orders"
                component={OrdersContainer}
                onEnter={onOrdersEnter} />
              <Route
                path="/admin"
                component={AdminContainer} />
            </Route>
          </Router>
        </Provider>*/}

        ,
  document.getElementById('app')
)
