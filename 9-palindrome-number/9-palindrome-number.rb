# @param {Integer} x
# @return {Boolean}

def reverse(x)
    reversed_num = 0
    while x > 0
        reversed_num = reversed_num * 10 + x % 10
        x = x / 10
    end
    reversed_num
end
def is_palindrome(x)
    return true if reverse(x) == x
    false
end