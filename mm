<Route path="/business"><News pageSize={6}  country="us" category="business" /></Route>
<Route path="/entertainment"><News pageSize={6}  country="us" category="entertainment" /></Route>
<Route path="/general"><News pageSize={6}  country="us" category="general" /></Route>
<Route path="/health"><News pageSize={6}  country="us" category="health" /></Route>
<Route path="/science"><News pageSize={6}  country="us" category="science" /></Route>
<Route path="/sports"><News pageSize={6}  country="us" category="sports" /></Route>
<Route path="/technology"><News pageSize={6}  country="us" category="technology" /></Route>


`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6469c634bf33433d8597c3c2158febd6&page=1&pageSize=${this.props.pageSize}`