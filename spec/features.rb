
require 'spec_helper'

describe 'a user can see a homepage' do

  it 'has the title X' do
    visit root_path
    expect(page).to have_content 'X'
  end

end
