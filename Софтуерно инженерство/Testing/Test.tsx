//requests - min:3 max:50 chars a-z A-Z 0-9 

class Validator{ 
    fun validateUsername(username: String) {}
} 
sut Validator()

//for testing
var res = sut.validateUsername("u")
assert(res, Error("Too short"))