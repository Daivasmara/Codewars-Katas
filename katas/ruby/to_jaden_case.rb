require 'minitest/autorun'

class String
  def toJadenCase
    self.split(' ').map(&:capitalize).join(' ')
  end
end

class TestToJadenCase < Minitest::Test
  def test_to_jaden_case
    str = "How can mirrors be real if our eyes aren't real";
    assert_equal("How Can Mirrors Be Real If Our Eyes Aren't Real", str.toJadenCase())
  end
end
