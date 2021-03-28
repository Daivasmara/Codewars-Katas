require 'minitest/autorun'

class TestXO < Minitest::Test
  def XO(str)
    str.downcase.count('x') == str.downcase.count('o')
  end

  def test_xo
    assert_equal(true, XO('xo'))
    assert_equal(true, XO('XO'))
    assert_equal(true, XO('xo0'))
    assert_equal(false, XO('xxxoo'))
    assert_equal(true, XO('xxOo'))
  end
end
