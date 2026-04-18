enum HttpMethod{
    Post = 'POST',
    Get = 'GET',
    Put = 'PUT',
    Delete = 'DELETE'
}

function SendRequest(method: HttpMethod , url: string): void{
    console.log(`Sending ${method} request to ${url}`);
}
SendRequest(HttpMethod.Get, "https://api.com/users");
SendRequest(HttpMethod.Post, "https://api.com/users");
SendRequest(HttpMethod.Put, "https://api.com/users/123");