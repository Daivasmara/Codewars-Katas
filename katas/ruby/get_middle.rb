require 'minitest/autorun'

class TestGetMiddle < Minitest::Test
  def get_middle(s)
    length = s.length
    middle_index = length / 2
    
    return s[middle_index] if length.odd?

    s.slice(middle_index - 1, 2)
  end

  def test_get_middle
    assert_equal('es', get_middle('test'))
    assert_equal('t', get_middle('testing'))
    assert_equal('dd', get_middle('middle'))
    assert_equal('A', get_middle('A'))
    assert_equal('of', get_middle('of'))
  end
end
