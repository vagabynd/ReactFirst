signin() {
    let signInForm = {
        'username': this.userNameInput.value,
        'password': this.passwordInput.value
    };

    fetch(backend + '/signin', {
        method: 'POST',
        credentials: "include",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInForm)
    })
        .then(resp => {
            if (resp.status === 200) {
                resp
                    .json()
                    .then(jsonBody => {
                        this.props.actions.signInSuccess(jsonBody.username, jsonBody.authorities);
                    });
            } else if (resp.status === 401) {
                // perform bb
            }
        });
}




fetch(backend + '/wordsets')
    .then(response => response.json())
    .then(body => {
        let wordSets = body.map(ws => {
            return {
                id: ws.id,
                name: ws.name,
                description: ws.description
            }
        });

        this.setState({ wordSets: wordSets, isLoaded: true});
    });



fetch(backend + '/wordsets/' + wsId + '/add',
    {
        method: 'POST',
        credentials: "include",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status === 200) {
            this.setState({...this.state, alert: 'Wordset was added'});
        } else {
            this.setState({...this.state, alert: 'Wordset was added'});
        }
    })
