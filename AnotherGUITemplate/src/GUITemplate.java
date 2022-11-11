import javax.swing.*;



/*
* Author: Kaden Morton
* GitHub Username: Sh0rtMort
* Date: 11/11/2022
*
*
*/

public class GUITemplate {
    private JPanel panel1;
    private JButton button1;
    private JButton button2;
    private JPasswordField passwordField1;
    private JLabel TextLabel;
    private JLabel logoLabel;

    private JFrame jf = new JFrame("Sample GUI");
    private ImageIcon img = new ImageIcon("C:\\Users\\morto\\OneDrive\\Desktop\\Programming\\Robohawks.jpg");

public GUITemplate() {
    jf.setContentPane(panel1);
    jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    jf.pack();
    jf.setVisible(true);
    logoLabel.setIcon(img);
}

//prints out the text in the password field
public void printPassword() {
    System.out.println(passwordField1.getText());
}



    public static void main(String[] args) {
        GUITemplate guiTemplate = new GUITemplate();
    }

    private void createUIComponents() {
        // TODO: place custom component creation code here
        logoLabel = new JLabel(new ImageIcon("Robohawks.jpg"));
    }
}
