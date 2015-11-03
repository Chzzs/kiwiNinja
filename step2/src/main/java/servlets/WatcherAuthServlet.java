package servlets;

import com.google.gson.Gson;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;

/**
 * Created by Chazz on 03/11/15.
 */
@WebServlet("/watcherAuth")
public class WatcherAuthServlet extends javax.servlet.http.HttpServlet {
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {
        StringBuffer buffer = new StringBuffer();
        String line = null;
        try {
            BufferedReader reader = request.getReader();
            while((line= reader.readLine()) != null)
                buffer.append(line);

        } catch (Exception e ){
            /* Oh noes ! */
        }
        Gson gson = new Gson();

        System.out.println(buffer.toString());

    }

    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response) throws ServletException, IOException {
        System.out.println("GET " + request.getParameter("login"));
    }
}
