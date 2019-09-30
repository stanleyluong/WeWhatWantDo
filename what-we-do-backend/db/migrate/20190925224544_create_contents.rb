class CreateContents < ActiveRecord::Migration[5.2]
  def change
    create_table :contents do |t|
      t.string :title
      t.string :type
      t.string :description, default: "[Description]"
      t.bool   :verified, default: false
      t.bool   :problem, default: false

      t.timestamps
    end
  end
end