import javax.swing.*;

public class MainGui {
    private JLabel label1;
    private JPanel panel1;

    private JFrame jf = new JFrame("Sample GUI");

    private ImageIcon img = new ImageIcon("C:\\Users\\morto\\OneDrive\\Desktop\\Programming\\Robohawks.jpg");
    public MainGui() {

        jf.setContentPane(panel1);
        jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        jf.pack();
        jf.setVisible(true);
        label1.setIcon(img);
    }

    public static void main(String[] args) {
        MainGui mainGui = new MainGui();
    }


    private void createUIComponents() {
        // TODO: place custom component creation code here

        label1 = new JLabel(new ImageIcon("Robohawks.jpg"));

    }
}
