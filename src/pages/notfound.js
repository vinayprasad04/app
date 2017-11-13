import React,{Component} from 'react';


class NotFound extends Component {
    render() {
        return (
            <div class="container">
                <h1 class="mt-4 mb-3">404 page</h1>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li class="breadcrumb-item active">404 page</li>
                </ol>

                <div class="row">
                    <div class="col-lg-12">
                        <h2>404 page error</h2>
                    </div>
                    <div class="col-lg-12">
                        <img class="img-fluid rounded " src="http://placehold.it/1300x450" alt="" />
                    </div>

                </div>

            </div>
        );
    }
}
export default NotFound;