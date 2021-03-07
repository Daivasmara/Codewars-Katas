require 'minitest/autorun'

class TestToCamelCase < Minitest::Test
  def to_camel_case(str)
    arr = str.split(/[-_]/)
    head = arr.shift
    tail = arr.map(&:capitalize).join('')

    "#{head}#{tail}"
  end

  def test_empty_string
    assert_equal('', to_camel_case(''))
  end

  def test_underscores
    assert_equal('theStealthWarrior', to_camel_case('the_stealth_warrior'))
  end

  def test_hyphen
    assert_equal('TheStealthWarrior', to_camel_case('The-Stealth-Warrior'))
    assert_equal('ABC', to_camel_case('A-B-C'))
  end
end
