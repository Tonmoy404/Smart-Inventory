package rest

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/Tonmoy404/Smart-Inventory/config"
	"github.com/Tonmoy404/Smart-Inventory/logger"
	"github.com/Tonmoy404/Smart-Inventory/service"
	"github.com/gin-gonic/gin"
)

type Server struct {
	router    *gin.Engine
	appConfig *config.Application
	svc       service.Service
	jwt       *config.Token
	salt      *config.Salt
}

func NewServer(appConfig *config.Application, svc service.Service, salt *config.Salt, jwt *config.Token) (*Server, error) {
	server := &Server{
		appConfig: appConfig,
		svc:       svc,
		salt:      salt,
		jwt:       jwt,
	}
	server.setupRouter()
	return server, nil
}

func (server *Server) setupRouter() {
	router := gin.Default()

	// CORS middleware
	router.Use(corsMiddleware)

	router.GET("/api/test", server.test)
	router.POST("/api/users/signup", server.signupUser)
	router.POST("/api/users/login", server.loginUser)

	// authRoutes := router.Group("/").Use(server.authMiddleware())

	router.POST("/api/users/add", server.addUser)
	router.DELETE("/api/users/:id", server.deleteUser)
	router.GET("/api/users/:id", server.getUser)
	router.PATCH("/api/users/update", server.updateUser)
	router.POST("/api/users/logout", server.logoutUser)
	router.GET("/api/users/profile", server.getUserProfile)
	router.PATCH("/api/users/password", server.changePassword)

	///product routes

	router.POST("/api/items/create", server.createProduct) //testing done
	router.DELETE("/api/items/:id", server.deleteProduct)  //testing done
	router.PATCH("/api/items/:id", server.updateProduct)   //testing done
	router.GET("/api/items/:id", server.getProduct)        //testing done
	router.GET("/api/items/all", server.getAllProducts)    //testing done

	///order routes
	router.POST("/api/orders/create", server.createOrder)
	router.DELETE("/api/orders/:id", server.cancelOrder)
	router.GET("/api/orders/:id", server.getOrder)
	router.PATCH("/api/orders/:id", server.updateOrder)
	router.GET("/api/orders/all", server.getAllOrders)

	///supplier routes

	router.POST("/api/suppliers/add", server.addSupplier)
	router.DELETE("/api/suppliers/:id", server.deleteSupplier)
	router.PATCH("/api/suppliers/:id", server.updateSuplier)
	router.GET("/api/suppliers/all", server.getAllSupplier)
	router.GET("/api/suppliers/:id", server.getSupplier)

	server.router = router
}

func (server *Server) Start() error {
	return server.router.Run(fmt.Sprintf("%s:%s", server.appConfig.Host, server.appConfig.Port))
}

func (server *Server) test(ctx *gin.Context) {
	res, err := http.Get("http://127.0.0.1:5000/?predictBy=month")

	if err != nil {
		logger.Info(ctx, "", err)
	}

	defer res.Body.Close()

	// Decode the JSON response into a 2D array
	var result [][]interface{}
	err = json.NewDecoder(res.Body).Decode(&result)
	if err != nil {
		// Handle the JSON decoding error and return a response
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return the result through the Gin response
	ctx.JSON(http.StatusOK, gin.H{"data": result})
}
